import { Component } from 'react'
import Button from 'react-bootstrap/Button';


export default class DeleteButton extends Component {

  render() {

    return (
      <Button variant="warning" onClick={() => this.props.deleteBook(this.props._id)}>Delete Book</ Button>
    )
  }
}
