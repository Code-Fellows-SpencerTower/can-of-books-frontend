import { Component } from "react";
import Books from "./Book";

class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */

    return (
      <>
        <p>User: {this.props.user}</p>
        <p>Email: {this.props.email}</p>
        <Books books={this.props.books} deleteBook={this.props.deleteBook} />
      </>
    )
  }
};

export default Profile;

