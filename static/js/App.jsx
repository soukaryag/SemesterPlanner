// App.jsx
import React from "react";
import FrontPage from "./FrontPage";
import FrontPageAbout from "./FrontPageAbout";
import { Navbar, Nav } from "react-bootstrap";

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
                <header class='header'>
                    <Navbar bg="light" variant="light" fixed="top">
                        <Navbar.Brand href="#home">SemesterX</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#login">Login</Nav.Link>
                        </Nav>

                    </Navbar>
                
                    <div className='header-contents'>
                    {this.addHeaderImg()}
                        <FrontPage name='SemesterX'/>
                    </div>
                </header>
                <br/>
                <div class="cardDiv">
                    <FrontPageAbout/>
                </div>
            </div>
        );
    }
}