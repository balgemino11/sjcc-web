import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollspyNav from './Scrollspy';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import logo from '../../images/img/logo.png';

class HeaderMulti extends Component {

    constructor(props) {
        super(props);
        this.state = { Tab: '', isOpen: false, modal: false, isOpenMenu: false };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleHeader = this.toggleHeader.bind(this);

    }


    toggleHeader = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu });
    }


    toggleModal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {

        return (
            <React.Fragment>

                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal}>
                        <h5 id="exampleModalLongTitle">Get in touch</h5>
                    </ModalHeader>
                    <ModalBody className="p-4">
                        <div className="custom-form">
                            <div id="message"></div>
                            <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group mb-4">
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Your Name..." />
                                        </div>
                                        <div className="form-group mb-4">
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your Email..." />
                                        </div>
                                        <div className="form-group mb-4">
                                            <input name="subject" id="subject" type="text" className="form-control" placeholder="Your Subject..." />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message..."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-12 text-right">
                                        <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Send Message" />
                                        <div id="simple-msg"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </ModalBody>
                </Modal>


                <div id="is-sticky">
                    <nav id="nav-bar" className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
                        <div className="container">
                            <Link className="logo text-white" to="/">
                                <img src={logo} alt="" className="logo-light" height="50" />
                                <img src={logo} alt="" className="logo-dark" height="50" />
                                <p className="logo-light text-white">San Jose Community College</p>
                                <p className="logo-dark text-dark">San Jose Community College</p>
                            </Link>

                            <button className="navbar-toggler" type="button" onClick={this.toggleHeader}>
                                <i className="mdi mdi-menu"></i>
                            </button>
                            <div className={this.state.isOpenMenu ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarCollapse">

                                <ScrollspyNav
                                    scrollTargetIds={["home", "about", "features", "services"]}
                                    activeNavClass="active"
                                    scrollDuration="800"
                                    headerBackground="true"
                                    className={this.state.isOpenMenu ? "navbar-nav ml-0 float-left" : "navbar-nav   ml-auto navbar-center"}>

                                    <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                                        <li className="nav-item active">
                                            <a href="#home" className="nav-link">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#about" className="nav-link">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#features" className="nav-link">Announcements</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#services" className="nav-link">News</a>
                                        </li>
                                        <li>
                                            <Link onClick={this.toggleModal} to="#" className="nav-link">Contact</Link>
                                        </li>
                                    </ul>
                                    <button className="btn btn-sm navbar-btn">Login</button>
                                </ScrollspyNav>
                             
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment >
        );
    }
}

export default HeaderMulti;


