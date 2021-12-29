import React, { Component } from 'react';
import logo from '../../../images/img/logo.png';

class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
               <section className="section" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="about-content text-center">
                            <p className="text-muted mb-4">EST .1993</p>
                            <h4 className="mx-auto mb-2" style={{color: "#13ce67"}}>San Jose Community College - History</h4>
                            <p className="text-muted">San Jose Community College was establish in 1993 through the collaborative efforts of the Barangay Council of San Jose, the Municipal Government of Malilipot, the Principal of San Jose National High School, the late Mr. Efren Brja and the PTA President, Mr. Ruben Rico and stakeholders.
With an initial enrolment of 33 students, enrolment had continuously increased due to school's high passing percentage in the Licensure Examination for Teachers (LET), recording a national placer in the year 2001.
SJCC is soaring to greater heights with its new site at Datag, San Jose , Malilipot, Albay, It will continue to live up to the philosophies for which it was founded to cater to the educational needs of the youth of the local community and nearby municipalities.
We, at SJCC envision the regular operation of the College with permanent staff within five (5) years and work for its conversion into state college 10 years hence.
An Ordinance establishing San Jose Community College is SB Municipal Ordinance No. 02-2018 "An Ordinance Establishing San Jose Community College (SJCC) defining its Mandate and Appropriating Funds Therefore" was enacted on July 19, 2018</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <div className="about-box text-center p-4">
                            <div className="about-icon mb-3">
                                <img src={logo} alt="" className="logo-light" height="100" />
                            </div>
                            <div className="about-desc">
                                <h4 className="mx-auto mb-2" style={{color: "#13ce67"}}>The School Seal</h4>
                                <p className="text-muted">The golden glimmering rays of the sun symbolize the commitment of SJCC to give all students enrolled in this institution a strong sense of hope for a brighter future.
The green leaves symbolize life and growth of the institution, the students, as well as the community where the college is erected.
The open book represents the knowledge where the fountain of wisdom and learning reservoir comes from.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </React.Fragment >
        );
    }
}

export default AboutUs;


