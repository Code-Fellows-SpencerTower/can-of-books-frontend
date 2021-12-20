import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import LoginButton from './LoginButton';
import './Login.css';


class Login extends React.Component {
  render() {
    return (
      <Container className="p-5">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Log In</Card.Title>
            <LoginButton loginHandler={this.props.loginHandler} />
          </Card.Body>
        </Card>
      </ Container>
    )
  }
}

export default Login;
