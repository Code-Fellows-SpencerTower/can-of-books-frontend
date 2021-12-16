import { Component } from 'react';
import Container from 'react-bootstrap/Container';
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
      <Container style={{ justifyContent: 'space-between' }}>
        <p style={{fontSize: '1.6em', fontWeight: 'bold' }}>{this.props.book.title}</p>
        <UpdateButton book={this.props.book} showUpdateModal={this.props.showUpdateModal} />
        <DeleteButton deleteBook={this.props.deleteBook} book={this.props.book} />
      </ Container>
    )
  }
}

export default Books;
