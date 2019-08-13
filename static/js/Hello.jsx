import React from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";

var $ = require('jquery');

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {greeting: this.props.name};

        // This binding is necessary to make `this` work in the callback
        this.getPythonHello = this.getPythonHello.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    personaliseGreeting(greeting) {
        this.setState({greeting: greeting});
    }

    getPythonHello() {
        $.get(window.location.href + 'classes', (data) => {
            console.log(data);
            this.personaliseGreeting(data);
        });
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
                        <h1>{this.state.greeting}</h1>
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
                {/* <Row>
                    <Col></Col>
                    <Col md={7} mdOffset={5}>
                        <Button bsSize="large" bsStyle="danger" onClick={this.getPythonHello}>
                            Get Started!
                        </Button>
                    </Col>
                    <Col></Col>
                </Row> */}
            </Container>
        );
    }
}