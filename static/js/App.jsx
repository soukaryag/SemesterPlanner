// App.jsx
import React from "react";
import FrontPage from "./FrontPage";
import FrontPageAbout from "./FrontPageAbout";
import { Navbar, Nav } from "react-bootstrap";
import * as CONSTANTS from './config';

require('../css/fullstack.css');
var $ = require('jquery');

import HeaderBackgroundImage from '../images/header.jpg';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    addHeaderImg() {
        let headerBg = new Image();
        headerBg.src = HeaderBackgroundImage;
    }

    render () {
        return (
            <div>
                <header class='header' id="home">
                    <Navbar bg="light" variant="light" fixed="top">
                        <Navbar.Brand href="#home">{ CONSTANTS.CompanyName }</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#login">Login</Nav.Link>
                        </Nav>

                    </Navbar>
                
                    <div className='header-contents'>
                    {this.addHeaderImg()}
                        <FrontPage name={ CONSTANTS.CompanyName }/>
                    </div>
                </header>
                <div class="cardDiv" id="about">
                    <FrontPageAbout/>
                </div>

            </div>
        );
    }
}