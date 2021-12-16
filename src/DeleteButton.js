import { Component } from 'react'
import Button from 'react-bootstrap/Button';


export default class DeleteButton extends Component {

  render() {

    return (
      <Button variant="outline-danger" className="mx-2 px-2" onClick={() => this.props.deleteBook(this.props.book)}>Delete Book</ Button>
    )
  }
}
