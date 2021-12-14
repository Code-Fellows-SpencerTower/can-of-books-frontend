import React from 'react';
import Card from 'react-bootstrap/Card';
import LoginForm from './LoginForm';
import LoginButton from './LoginButton';
import './Login.css';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginClicked: false
    }
  }

  handleClick = () => {
    this.setState({
      loginClicked: true
    });
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          {this.state.loginClicked ? <LoginButton handleClick={this.handleClick} /> : <LoginForm onLogin={this.props.onLogin} />}
          {/* TODO: add a `LoginButton` component here that will log the user in */}
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
