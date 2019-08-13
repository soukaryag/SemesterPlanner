import React from "react";
import FrontPage from "./FrontPage";
import { Navbar } from "react-bootstrap";

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
            <header class='header'>
                <div className='header-contents'>
                {this.addHeaderImg()}
                    <FrontPage name='SemesterX'/>
                </div>
            </header>
        );
    }
}