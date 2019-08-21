import React from "react";
import { Container } from "react-bootstrap";
import * as CONSTANTS from './config';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div class="footer">

                <hr />

                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright <a style={{'text-decoration': 'none'}} href={ CONSTANTS.Author_URL }> { CONSTANTS.Author } </a> · All rights reserved. <a href={ CONSTANTS.Author_mailto }>Report a bug, suggest a change, or send a message.</a>
                    </Container>
                </div>

                <br />
            </div>
        );
    }
}