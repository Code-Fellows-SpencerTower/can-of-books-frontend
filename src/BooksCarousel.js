import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';


class BooksCarousel extends Component {

  render() {
    return (
      <div>
        <Carousel fade>
          {this.props.books.map(book => {
            return (
              <Carousel.Item style={{ color: 'blue' }} key={book._id}>
                <img style={{ width: '200px', height: '800px' }}
                  className="d-block w-100"
                  src="https://libribook.com/Images/the-windup-universe-01-windup-girl-pdf.jpg"
                  alt="First slide"
                />
                <Carousel.Caption >
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                  <p>Status: {book.status}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    );
  }
}

export default BooksCarousel;

