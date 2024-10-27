import React from 'react';

const Banner = () => {
  return (
    <div className="banner-area banner-area-2" style={{ backgroundImage: "url(assets/img/banner/5.png)" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 align-self-center">
            <div className="banner-inner text-center text-lg-left">
              <h6 className="sub-title">PLACE TO GROW</h6>
              <h1 className="title">WE CREATING LEADERS FOR TOMORROW</h1>
              <a className="btn btn-base" href="/quote">Get A Quote</a>
              <a className="btn btn-border-white" href="/readmore">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
