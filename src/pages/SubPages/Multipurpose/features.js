import React, { Component } from 'react';
import img1 from '../../../images/features/img-1.png';
import img2 from '../../../images/features/img-2.png';

class Features extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="features">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Announcement</p>
                                    <h3 className="text-uppercase">Courses Offered</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row vertical-content">
                            <div className="col-lg-6">
                                <div className="feautures-content p-5">
                                    <div className="feautures-icon mb-4">
                                        <i className="mdi mdi-chart-bar h4 text-custom"></i>
                                    </div>
                                    <div>
                                        <h5 className="mb-3">SENIOR HIGH SCHOOL</h5>
                                        <p className="text-muted"><b>Academic Track</b></p>
                                        <div>
                                            <p className="text-muted"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i> - ABM Strand (Accounting and Business Management)</p>
                                            <p className="text-muted"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i> - HUMSS Strand (Humanities and Social Sciences)</p>
                                        </div>
                                        <p className="text-muted"><b>TVL Track</b></p>
                                        <div>
                                            <p className="text-muted"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i> - CSS Strand (Computer System Servicing)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="features-img">
                                    <img src={img1} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </div>
                        </div>
                        <div className="row vertical-content mt-5">
                            <div className="col-lg-6">
                                <div className="features-img">
                                    <img src={img2} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="feautures-content p-5">
                                    <div className="feautures-icon mb-4">
                                        <i className="mdi mdi-apple-keyboard-command h4 text-custom"></i>
                                    </div>
                                    <div>
                                        <h5 className="mb-3">COLLEGE OF ARTS AND SCIENCES</h5>
                                        <p className="text-muted">Bachelor of Science in Business Administration</p>
                                        <div>
                                            <p className="text-muted"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i> - Major in Business Economics</p>
                                            <p className="text-muted"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i> - Major in Human Resource Development Management</p>
                                            <p className="text-muted"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i> - Major in Operation Management</p>
                                            <p className="text-muted"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i> - Major in Marketing Management</p>
                                            <p className="text-muted"><i className="mdi mdi-checkbox-marked-outline h5 text-custom mr-2"></i> - Major in Marketing Management</p>
                                        </div>
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

export default Features;


