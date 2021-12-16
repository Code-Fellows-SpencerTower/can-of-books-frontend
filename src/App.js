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
import Container from 'react-bootstrap/Container';
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

  //-------------Login Functions----------------

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
      email: null,
      books: [],
      show: false
    })
  }

  //--------------Query Functions---------------

  getBooks = async () => {
    console.log("Get Books");
    const fullUrl = this.state.email ? `${url}/books?user=${this.state.email}` : `${url}/books`; // Need to change and add error handling
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
      await axios.delete(url + '/books/' + book._id + `?email=${this.state.email}`);

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
          <Header user={this.state.user} onLogout={this.logoutHandler} showModal={this.showModal} />
          <Container>
            <Switch>
              <Route exact path="/">
                {this.state.user ? <BestBooks books={this.state.books} /> : <Login onLogin={this.loginHandler} />}
                <BookFormModal closeModal={this.closeModal} books={this.state.books} setBooks={this.setBooks} show={this.state.show} email={this.state.email} user={this.state.user} />
              </Route>
              <Route exact path="/profile">
                <Profile user={this.state.user} email={this.state.email} books={this.state.books} deleteBook={this.deleteBook} updateBook={this.updateBook} />
                <BookFormModal closeModal={this.closeModal} books={this.state.books} setBooks={this.setBooks} show={this.state.show} email={this.state.email} user={this.state.user} />
              </Route>
            </Switch>
          </ Container>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
