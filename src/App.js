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


const url = 'https://kl-st-can-of-books-backend.herokuapp.com';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: null,
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

  //-------------Login Functions----------------

  // when user logs in, get books
  loginHandler = () => {
    console.log(this.props.auth0);
    this.setState({
      user: this.props.auth0.user.given_name,
      email: this.props.auth0.user.email
    }, () => this.getBooks());
  }

  logoutHandler = () => {
    console.log('handle log out');
    this.setState({
      books: [],
      show: false
    })
  }

  //--------------Query Functions---------------

  getBooks = async () => {
    console.log("Get Books");
    const fullUrl = this.state.email ? `${url}/books?user=${this.props.auth0.user.email}` : `${url}/books`; // Need to change and add error handling
    let bookResponse = await axios.get(fullUrl);
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
      await axios.delete(url + '/books/' + book._id + `?email=${this.props.auth0.user.email}`);

      const updatedBooks = this.state.books.filter(filterBook => filterBook._id !== book._id)
      this.setState({ books: updatedBooks })
    } catch (e) {
      console.error(e);
    }
  }

  updateBook = async (updatedBookObj, id) => {
    try {
      // send put request with updated book
      const updatedBook = await axios.put(url + '/books/' + id, updatedBookObj);
      const updatedBookState = this.state.books.map(book => {
        // make sure ids match
        if (book._id === id) {
          return updatedBook.data;
        }
        return book;
      })
      this.setState({ books: updatedBookState });
    } catch (e) {
      console.error(e)
    }
  }

  // pass set books and this.state.books to profile and bestbooks
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
                  <BookFormModal closeModal={this.closeModal} books={this.state.books} setBooks={this.setBooks} show={this.state.show} email={this.props.auth0.user.email} user={this.props.auth0.user.given_name} />
                </Route>
                <Route exact path="/profile">
                  <Profile user={this.props.auth0.user.given_name} email={this.props.auth0.user.email} books={this.state.books} deleteBook={this.deleteBook} updateBook={this.updateBook} />
                  <BookFormModal closeModal={this.closeModal} books={this.state.books} setBooks={this.setBooks} show={this.state.show} email={this.props.auth0.user.email} user={this.props.auth0.user.given_name} />
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
