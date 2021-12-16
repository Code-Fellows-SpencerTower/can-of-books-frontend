import React from 'react';
import Container from 'react-bootstrap/Container';
import BooksCarousel from './BooksCarousel';




class BestBooks extends React.Component {

  render() {

    return (
      <>
        <Container className="mx-auto" style={{ display: 'flex', justifyContent: 'center'}}>
          <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        </Container>
        {
          this.props.books.length ? (
            <Container>
              <BooksCarousel books={this.props.books} />
            </Container>
          ) : (
            <h3>No Books Found :(</h3>
          )
        }
      </>
    )
  }
}

export default BestBooks;
