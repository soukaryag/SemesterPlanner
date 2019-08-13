import React from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";

var $ = require('jquery');

export default class FrontPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: this.props.name};

        // This binding is necessary to make `this` work in the callback
        this.redirect = this.redirect.bind(this);
    }


    redirect() {
        $.get(window.location.href + 'classes', (data) => {
            window.location = "/classes?mjr=" + $('#mjr').val();
        });
    }


    render () {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col md={7} mdOffset={5}>
                        <h1>{this.state.name}</h1>
                        <hr/>
                        <Form onSubmit={this.redirect}>
                            <Form.Group controlId="Major">
                                <Form.Control id="mjr" size="lg" type="text" placeholder="Enter Major" />
                            </Form.Group>
                            <br/>
                            <Button variant="primary" type="submit">
                                Get Started!
                            </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}