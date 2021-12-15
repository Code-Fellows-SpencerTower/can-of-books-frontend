import { Component } from 'react'
import Button from 'react-bootstrap/Button';


export default class DeleteButton extends Component {

  render() {

    return (
      <Button variant="outline-danger" onClick={() => this.props.deleteBook(this.props.book)}>Delete Book</ Button>
    )
  }
}
