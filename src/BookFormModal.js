import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



class BookFormModal extends Component {

  handleClose = () => {
    this.props.closeModal();
  }

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.book.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src={this.props.beast.image_url} alt={this.props.beast.description} title={this.props.beast.title} />
              <Card.Text>{this.props.beast.description}</Card.Text>
            </Card>
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