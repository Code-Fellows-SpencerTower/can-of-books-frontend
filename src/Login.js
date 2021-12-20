import React from 'react';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton';
import './Login.css';


class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <LoginButton loginHandler={this.props.loginHandler} />
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
