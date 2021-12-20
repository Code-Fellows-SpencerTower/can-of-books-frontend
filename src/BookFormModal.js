import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const url = 'https://kl-st-can-of-books-backend.herokuapp.com'

class BookFormModal extends Component {


  makeBook = async (newBook) => {
    try {
      // creates new id for book, sends book to db via server, returns book with id
      // console.log('makeBook called');
      // const bookResponse = await axios.post(url + '/books', newBook);
      const res = this.props.getID
      const jwt = res.__raw;

      const config = {
        method: 'get',
        baseURL: process.env.SERVER_URL,
        url: '/books',
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