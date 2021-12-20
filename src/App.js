import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';
import BookFormModal from './BookFormModal';
import Profile from './Profile';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';


const url = process.env.REACT_APP_SERVER_URL;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false
    }
  }

  //--------------Modal Functions----------------
  showModal = () => {
    // sets state to true when modal is shown
    this.setState({ show: true });
  }

  closeModal = () => {
    // sets state to false when modal closed
    this.setState({ show: false });
  }

  //--------------Query Functions---------------

  getBooks = async () => {
    console.log("Get Books");
    const res = await this.props.auth0.getIdTokenClaims();
    // put token in variable
    const jwt = res.__raw;
    const config = {
      method: 'get',
      // change back to process.env
      baseURL: url,
      url: '/books',
      headers: {
        "Authorization": `Bearer ${jwt}`
      }
    }
    const bookResponse = await axios(config);
    console.log(bookResponse.data);
    this.setState({ books: bookResponse.data });
  }


  // set books function
  setBooks = (newBook) => {
    this.setState({ books: [...this.state.books, newBook] }, console.log("In set books:", this.state.books))
  }

  deleteBook = async (book) => {
    console.log("delete", book._id)
    try {

      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;
      const config = {
        method: 'delete',
        baseURL: url,
        url: `/books/${book._id}`,
        headers: { "Authorization": `Bearer ${jwt}` }
      }
      await axios(config);
      const updatedBooks = this.state.books.filter(filterBook => filterBook._id !== book._id)
      this.setState({ books: updatedBooks })
    } catch (e) {
      console.error(e);
    }
  }

  updateBook = async (updatedBookObj, id) => {
    try {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        method: 'put',
        baseURL: url,
        url: `/books/${id}`,
        data: updatedBookObj,
        headers: { "Authorization": `Bearer ${jwt}` }
      }
      const updatedBook = await axios(config);
      const updatedBookState = this.state.books.map(book => {
        // make sure ids match
        if (book._id === id) {
          return updatedBook.data;
        }
        return book;
      })
      this.setState({ books: updatedBookState })
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <>
        <Router>
          {this.props.auth0.isAuthenticated ?
            <>
              <Header user={this.props.auth0.user.given_name} logoutHandler={this.logoutHandler} showModal={this.showModal} loginHandler={this.loginHandler} />
              <Switch>
                <Route exact path="/">
                  <h2> {this.props.auth0.user.given_name} </ h2>
                  <BestBooks books={this.state.books} getBooks={this.getBooks} />
                  <BookFormModal auth0={this.props.auth0} closeModal={this.closeModal} books={this.state.books} setBooks={this.setBooks} show={this.state.show} email={this.props.auth0.user.email} user={this.props.auth0.user.given_name} />
                </Route>
                <Route exact path="/profile">
                  <Profile user={this.props.auth0.user.given_name} email={this.props.auth0.user.email} books={this.state.books} deleteBook={this.deleteBook} updateBook={this.updateBook} />
                  <BookFormModal auth0={this.props.auth0} closeModal={this.closeModal} books={this.state.books} setBooks={this.setBooks} show={this.state.show} email={this.props.auth0.user.email} user={this.props.auth0.user.given_name} />
                </Route>
              </Switch>
            </ > : <Login loginHandler={this.loginHandler} />}
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
