import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class LoginForm extends Component {

  handleSubmit = (e, val) => {
    e.preventDefault();
    let tempObj = {
      user: e.target.formBasicUsername.value,
      email: e.target.formBasicEmail.value
    }
    this.props.onLogin(tempObj);
    // console.log(e.target.formBasicUsername.value);
  }

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    // {() => this.props.onLogin(this.target.formBasicUsername)}
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername" >
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    );
  }
};

export default LoginForm;