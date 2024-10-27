import React from 'react';
import Intro from '../components/Intro';


const HomePage = () => {
    return (
        <div>
            {/* Banner Section */}
            <div className="banner-area banner-area-2" style={{ backgroundImage: "url('/assets/img/banner/5.png')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 align-self-center">
                            <div className="banner-inner style-white text-center text-lg-left">
                                <h6 className="b-animate-1 sub-title">PLACE TO GROW</h6>
                                <h1 className="b-animate-2 title">WE CREATING LEADERS FOR TOMORROW</h1>
                                <a className="btn btn-base b-animate-3 mr-sm-3 mr-2" href="/quote">Get A Quote</a>
                                <a className="btn btn-border-white b-animate-3" href="/readmore">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intro Section */}
           <Intro/>
        </div>
    );
}

export default HomePage;
