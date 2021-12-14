import React from 'react';
import axios from 'axios';
import BooksCarousel from './BooksCarousel';


const url = 'https://kl-st-can-of-books-backend.herokuapp.com';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      user: ''

    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  getBooks = async (user = null) => {
    const fullUrl = user ? `${url}/books?user=${user}` : `${url}/books`;
    let bookResponse = await axios.get(fullUrl);
    this.setState({ books: bookResponse.data });
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <BooksCarousel books={this.state.books} />
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
