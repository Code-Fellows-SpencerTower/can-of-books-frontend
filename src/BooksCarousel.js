import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';


class BooksCarousel extends Component {

  render() {
    return (
      <div>
        <Carousel fade>
            {this.props.books.map(book => {
                return (
                    <Carousel.Item>
                    <Carousel.Caption>
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    <p>{book.status}</p>
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

