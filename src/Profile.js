import { Component } from "react";
import Books from "./Book";
import UpdateModal from "./UpdateModal";

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
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

  render() {
    return (
      <>
        <p>User: {this.props.user}</p>
        <p>Email: {this.props.email}</p>
        <Books books={this.props.books} deleteBook={this.props.deleteBook}/>
        {<UpdateModal updateBook={this.props.updateBook}  closeModal={this.closeModal} books={this.state.books} setBooks={this.setBooks} show={this.state.show} email={this.props.email} user={this.props.user} />}
      </>
    )
  }
};

export default Profile;

