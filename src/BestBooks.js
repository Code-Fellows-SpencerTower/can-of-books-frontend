import React from 'react';
import Container from 'react-bootstrap/Container';
import BooksCarousel from './BooksCarousel';




class BestBooks extends React.Component {

  render() {

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.props.books.length ? (
          <Container>
            <BooksCarousel books={this.props.books} />
          </Container>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
