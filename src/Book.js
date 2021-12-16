import { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';

class Books extends Component {

  render() {
    return (
      <ListGroup>
        {this.props.books.length && this.props.books.map(book => (
          <ListGroup.Item key={book._id} >
            <Book book={book} showUpdateModal={this.props.showUpdateModal} deleteBook={this.props.deleteBook} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
}

class Book extends Component {

  render() {
    return (
      <h3>{this.props.book.title}<UpdateButton book={this.props.book} showUpdateModal={this.props.showUpdateModal} /> <DeleteButton deleteBook={this.props.deleteBook} book={this.props.book} /> </h3>
    );
  }
}

export default Books;
