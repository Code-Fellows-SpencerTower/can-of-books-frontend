import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const url = process.env.REACT_APP_SERVER_URL;

class BookFormModal extends Component {

  makeBook = async (newBook) => {
    try {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      const config = {
        method: 'post',
        baseURL: url,
        url: '/books',
        data: newBook,
        headers: { "Authorization": `Bearer ${jwt}` }
      }
      const bookResponse = await axios(config);
      console.log("from makeBook", bookResponse.data);
      this.props.setBooks(bookResponse.data);
    } catch (e) {
      console.log('makeBook called Error');
      console.error(e);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      email: this.props.email,
      status: e.target.status.value
    }
    console.log(newBook)
    this.makeBook(newBook)
    e.target.reset()
  }

  handleClose = () => {
    this.props.closeModal();
  }

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.handleClose} animation={false}>
          <Modal.Header>
            <Modal.Title>Add a Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit} >
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Book Title:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description:</Form.Label>
                <Form.Control type="textarea" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="status">
                <Form.Label>Book Status:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Book
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

export default BookFormModal;