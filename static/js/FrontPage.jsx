import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import SelectSearch from 'react-select-search'
import '../css/style.css';
import '../css/fullstack.css';
import { majors } from './data';
import * as CONSTANTS from './config';

var $ = require('jquery');

export default class FrontPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name, 
            major: 'NONE'
        };
        // This binding is necessary to make `this` work in the callback
        this.redirect = this.redirect.bind(this);
    }

    redirect() {
        $(window.location = "/classes?mjr=" + this.state.major.name);
    }
    handleChange = selectedOption => {
        this.state.major = selectedOption;
    };

    render () {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col md={7} mdOffset={5}>
                        <h1>{this.state.name}</h1>
                        <br/>
                        <SelectSearch
                            id="mjr"
                            name="major"
                            mode="input"
                            value={this.state.major}
                            options={majors}
                            placeholder="Select Major"
                            onChange={this.handleChange}
                        />
                        <br/>
                        <Button variant="primary" type="button" onClick={this.redirect}>
                            Get Started!
                        </Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}