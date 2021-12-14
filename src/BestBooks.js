import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import BooksCarousel from './BooksCarousel';


const url = process.env.SERVER_URL;

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
          <Container>
            <BooksCarousel books={this.state.books} />
          </Container>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
