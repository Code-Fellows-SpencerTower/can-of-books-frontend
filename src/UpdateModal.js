import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UpdateModal extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="text" placeholder={this.props.book.Title} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="textarea" placeholder={this.props.book.description} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="statue">
                <Form.Label>Statue</Form.Label>
                <Form.Control type="text" placeholder={this.props.book.status} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update Book
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default UpdateModal;