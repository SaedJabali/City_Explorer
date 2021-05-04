import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Body extends React.Component {
    render() {
        return (
            <Form style={{ textAlign: 'center' }} onSubmit={this.props.getLocation}>
          <Form.Group controlId="formBasicText">
            <Form.Label>Find City</Form.Label>
            <br />
            <Form.Control style={{ width: '300px' }} onChange={this.props.updateselectedLocation} type="Text" placeholder="Enter City" />
          </Form.Group>
          <Button style={{ color: 'white', backgroundColor: 'black', width: '150px' }} variant="primary" type="submit">
            Search
  </Button>
        </Form  >
        );
    }
}

export default Body;