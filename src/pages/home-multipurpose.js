import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ScrollTo } from "react-scroll-to";
// Layouts
import HeaderMulti from './Layouts/header-multi';
import Footer from './Layouts/footer';

// Shared
import AboutUs from './SubPages/Multipurpose/about-us';
import Features from './SubPages/Multipurpose/features';
import Services from './SubPages/Multipurpose/services';
import Contact from './SubPages/Multipurpose/contact';


// Modal Video 
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import '../css/pe-icon-7.css';

class homeBusiness extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('nav-bar').classList.add('nav-sticky');
        }
        else {
            document.getElementById('nav-bar').classList.remove('nav-sticky');
        }
    }
    render() {

        return (
            <React.Fragment>

                {/*  Header */}
                <HeaderMulti />

                {/* Home Section */}
                <section className="bg-home" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="home-title text-white">
                                            <h1 style={{color: "#13ce67"}}>Vision</h1>
                                            <p className="mt-3" style={{color: "#ffffff"}}>A learning institution of excellence in which graduates will be globally competitive professionals, economic change agents attuned to the needs of the industry, and protector of Filipino values, culture and identity.</p>
                                            <h1 style={{color: "#13ce67"}}>Mission</h1>
                                            <p className="mt-3" style={{color: "#ffffff"}}>The San Jose Community College, as a part of the country's educational system shall primarily provide advanced professional instruction in the field of Bachelor of Science in Business Administration, Education, Culture and the Arts and other fields of disciplines. It shall also promote research, extension services and adhere to progressive leadership in all areas of discipline and responsibilities. </p>
                                            <div className="watch-video mt-5">
                                                <Link to="#" className="btn btn-custom mr-4">Enroll Now!</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mouse-down text-center">
                                            <ScrollTo>
                                                {({ scrollTo }) => (
                                                    <Link to="#about" onClick={() => scrollTo({  y: 710, smooth: true })} className="down-scroll text-dark">
                                                            <i className="mdi mdi-arrow-down h4"></i>
                                                        </Link>
                                                )}
                                            </ScrollTo>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <AboutUs />
                <Features />
                <Services />
                <Contact />

                {/* Footer */}
                <Footer />

            </React.Fragment >
        );
    }
}

export default homeBusiness;


