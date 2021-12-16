import { Component } from 'react'
import Button from 'react-bootstrap/Button';


export default class UpdateButton extends Component {

  render() {

    return (
      <Button variant="outline-info" onClick={() => this.props.showUpdateModal(this.props.book)}>Update Book</ Button>
    )
  }
}
