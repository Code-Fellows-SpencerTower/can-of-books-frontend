import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UpdateModal extends Component {

  handleSubmit = (e) => {
    e.preventDefault()

    const updatedBook = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      email: this.props.email,
      status: e.target.status.value || this.props.book.status
    }
    console.log('this.props.book._id', this.props.book._id);
    this.props.updateBook(updatedBook, this.props.book._id)
    this.props.closeModal();
  }

  handleClose = () => {
    this.props.closeModal();
  }

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.closeModal}>
          <Modal.Header>
            <Modal.Title>Update Book Info:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="text" placeholder={this.props.book.title} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="textarea" placeholder={this.props.book.description} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" placeholder={this.props.book.status} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update Book
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UpdateModal;