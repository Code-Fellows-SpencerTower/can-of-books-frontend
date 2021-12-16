import { Component } from "react";
import Books from "./Book";
import UpdateModal from "./UpdateModal";

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      bookToUpdate: {}
    }
  }

  //--------------Modal Functions----------------

  showModal = () => {
    // sets state to true when modal is shown
    this.setState({ show: true });
  }

  closeModal = () => {
    // sets state to false when modal closed
    this.setState({ show: false });
  }

  //--------------UpdateBook-----------------

  showUpdateModal = (book) => {
    this.setState({ show: true, bookToUpdate: book });
  }

  render() {
    return (
      <>
        <p style={{ fontSize: '1.4em', fontWeight: 'bold' }}>User: {this.props.user}</p>
        <p style={{ fontSize: '1.4em', fontWeight: 'bold' }}>Email: {this.props.email}</p>
        <Books books={this.props.books} showUpdateModal={this.showUpdateModal} deleteBook={this.props.deleteBook} />
        <UpdateModal updateBook={this.props.updateBook} closeModal={this.closeModal} show={this.state.show} email={this.props.email} user={this.props.user} book={this.state.bookToUpdate} />
      </>
    )
  }
};

export default Profile;

