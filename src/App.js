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

const url = 'https://kl-st-can-of-books-backend.herokuapp.com'

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

  // when user logs in, get books
  loginHandler = (formObj) => {
    this.setState({
      user: formObj.user,
      email: formObj.email
    }, () => this.getBooks());

  }

  logoutHandler = () => {
    console.log('handle log out');
    this.setState({
      user: null,
      email: null
    })
  }

  getBooks = async () => {
    console.log("Get Books");
    const fullUrl = this.state.email ? `${url}/books?user=${this.state.email}` : `${url}/books`; // Need to change and add error handling
    let bookResponse = await axios.get(fullUrl);
    console.log(bookResponse.data);
    this.setState({ books: bookResponse.data });
  }

  // componentDidMount() {
  //   this.getBooks();
  // }

  // set books function
  setBooks = (newBook) => {
    this.setState({ books: [...this.state.books, newBook] }, console.log("In set books:", this.state.books))
  }

  deleteBook = async (id) => {
    console.log("delete", id)
    // try {
    //   await axios.delete(url + '/books/' + id);
    //   // remove the cat whose id matches the cat from the cat array
    //   const updatedBooks = this.state.books.filter(book => book._id !== id)
    //   this.setState({ books: updatedBooks })
    // } catch (e) {
    //   console.error(e);
    // }
  }


  // pass set books and this.state.books to profile and bestbooks
  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} showModal={this.showModal} />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {this.state.user ? <BestBooks books={this.state.books} /> : <Login onLogin={this.loginHandler} />}
              {<BookFormModal closeModal={this.closeModal} books={this.state.books} setBooks={this.setBooks} show={this.state.show} email={this.state.email} user={this.state.user} />}
            </Route>
            <Route exact path="/profile">
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Profile user={this.state.user} email={this.state.email} books={this.state.books} deleteBook={this.deleteBook} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
