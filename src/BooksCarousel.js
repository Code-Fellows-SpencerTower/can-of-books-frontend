import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { CarouselItem } from 'react-bootstrap';


class BooksCarousel extends Component {

  render() {
    return (
      <div>
        <Card style={{ width: '40rem', height: '25rem' }}>
          <Carousel variant="dark" fade>
            {this.props.books.map(book => {
              return (
                <Carousel.Item key={book._id}>
                  <Image src="https://cdn.shopify.com/s/files/1/2329/3055/articles/ReadingToUnderstandOurWorld_2048x.jpg?v=1521864290" alt="First slide" rounded fluid />
                  <Carousel.Caption style={{ top: 55 }}>
                    <h3 style={{ height: '1.2em'}}>{book.title}</h3>
                    <p>{book.description} </p>
                    <p><b>Status: {book.status}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Card>
      </div >
    );
  }
}

export default BooksCarousel;

