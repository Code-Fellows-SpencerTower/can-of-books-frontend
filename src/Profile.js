import { Component } from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

class Profile extends Component {


  makeBook = async (newBook) => {
    try {
      // creates new id for book, sends book to db via server, returns book with id
      const bookResponse = await axios.post(process.env.SERVER_URL + '/books', newBook);
      // add book w/ id to state
      this.props.setBooks(bookResponse.data);
    } catch (e) {
      console.error(e);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      email: e.target.email.value,
      status: e.target.status.value
    }
    console.log(newBook)
    this.makeBook(newBook)
    e.target.reset()
  }

  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */

    return (
      <>
        <p>User: {this.props.user}</p>
        <p>Email: {this.props.email}</p>
        
        <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header>Add New Book</Card.Header>
          <Card.Body>
            <Card.Title>User: {this.props.user}</Card.Title>
            <Form onSubmit={this.handleSubmit} >
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Book Title:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Description:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="status">
                <Form.Label>Book Status:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Book
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    )
  }
};

export default Profile;

