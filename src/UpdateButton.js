import { Component } from 'react'
import Button from 'react-bootstrap/Button';


export default class UpdateButton extends Component {

  render() {

    return (
      <Button variant="outline-info" className="mx-2 px-2" onClick={() => this.props.showUpdateModal(this.props.book)}>Update Book</ Button>
    )
  }
}
