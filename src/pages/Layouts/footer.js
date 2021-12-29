
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import ScrollUpButton from "react-scroll-up-button";

import '../../css/pe-icon-7.css';
import logo from '../../images/img/logo.png';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <footer className="bg-footer">
                    <div className="container">
                        <Row>
                            <Col lg="3">
                                <div className="text-white">
                                    <img src={logo} alt="" className="logo-light" height="50" />
                                    {/* <h3 className="mb-4 footer-list-title f-17">Zairo</h3> */}
                                    <p className="copyright mt-3">{new Date().getFullYear()} © San Jose Community College</p>
                                </div>
                            </Col>
                            <Col lg="9">
                                <Row>
                                    <Col lg="3">
                                        <div>
                                            <p className="text-white mb-4 footer-list-title f-17">Resources</p>
                                            <ul className="list-unstyled footer-list-menu">
                                                <li><Link to="#">Help & Support</Link></li>
                                                <li><Link to="#">Privacy Policy</Link></li>
                                                <li><Link to="#">Terms & Conditions</Link></li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </footer>
                <ScrollUpButton  style={{ width: "30px",height: "30px",position: "fixed",bottom : "10px", right : "20px", padding : "5px",  textAlign : "center", zIndex : "10000", borderRadius : "3px", backgroundColor : "rgba(19, 206, 103, 0.7)" }} />

            </React.Fragment >
        );
    }
}

export default Footer;


