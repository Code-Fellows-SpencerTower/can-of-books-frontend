import { Component } from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

class Profile extends Component {



  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */

    return (
      <>
        <p>User: {this.props.user}</p>
        <p>Email: {this.props.email}</p>
      </>
    )
  }
};

export default Profile;

