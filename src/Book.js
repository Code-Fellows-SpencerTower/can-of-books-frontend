import { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import DeleteButton from './DeleteButton';

class Books extends Component {

  render() {
    return (
      <ListGroup>
        {this.props.books.length && this.props.books.map(book => (
          <ListGroup.Item key={book._id} >
            <Book info={book} deleteBook={this.props.deleteBook} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
}

class Book extends Component {

//   handleClick = (e) => {
//     console.log(e.target)
//     this.props.deleteCat(this.props.info._id)
//   }

  render() {
    return (
      <h3>{this.props.title} <DeleteButton deleteBook={this.props.deleteBook} /> </h3>

    );
  }
}

export default Books;
