import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import '../css/fullstack.css';
import * as CONSTANTS from './config';

var $ = require('jquery');

export default class FrontPageAbout extends React.Component {
    constructor(props) {
        super(props);
    }


    render () {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <h1 class="centerText">Welcome to { CONSTANTS.CompanyName }!</h1>
                        <p class="centerText">
                            This is a platform built to help students lay out the rest of their undergraduate days.
                            Plan your semesters with your intended majors and minors in this user-friendly environment!
                        </p>
                    </Col>
                    <Col></Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <a style={{'text-decoration': 'none'}} href="/announcements">
                            <Card className="text-center">
                                <Card.Img style={{ width: '10rem', height: '10rem', margin: 'auto', left:'0', right: '0' }} variant="top" src="https://theme.zdassets.com/theme_assets/678183/1bd76d1fd516f8dacd3c7422a8ceb929ef2502d9.svg" />
                                <Card.Body>
                                    <Card.Title>Announcements</Card.Title>
                                    <a class="fadingHR"><hr/></a>
                                    <Card.Text>
                                        We're continuously making this platform better. Here's what you need to know.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a style={{'text-decoration': 'none'}} href="/browse">
                            <Card className="text-center">
                                <Card.Img style={{ width: '10rem', height: '10rem', margin: 'auto', left:'0', right: '0' }} variant="top" src="https://theme.zdassets.com/theme_assets/678183/1883060a5132c470528a20c1cfe42976e7c167ca.svg" />
                                <Card.Body>
                                    <Card.Title>Browse</Card.Title>
                                    <a class="fadingHR"><hr/></a>
                                    <Card.Text>
                                        Explore all the majors that UVA has to offer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>

                    <Col>
                        <a style={{'text-decoration': 'none'}} href="/login">
                            <Card className="text-center">
                                <Card.Img style={{ width: '10rem', height: '10rem', margin: 'auto', left:'0', right: '0' }} variant="top" src="https://theme.zdassets.com/theme_assets/678183/3da6524afd9979b44c5f6ceaf19e812c204ad74e.svg" />
                                <Card.Body>
                                    <Card.Title>Manage Account</Card.Title>
                                    <a class="fadingHR"><hr/></a>
                                    <Card.Text>
                                        Login and maintain your account using your UVA login.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </Container>
        );
    }
}