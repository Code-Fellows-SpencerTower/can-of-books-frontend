import { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import DeleteButton from './DeleteButton';

class Books extends Component {

  render() {
    return (
      <ListGroup>
        {this.props.books.length && this.props.books.map(book => (
          <ListGroup.Item key={book._id} >
            <Book book={book} deleteBook={this.props.deleteBook} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
}

class Book extends Component {

  render() {
    return (
      <h3>{this.props.book.title} <DeleteButton deleteBook={this.props.deleteBook} book={this.props.book} /> </h3>
    );
  }
}

export default Books;
