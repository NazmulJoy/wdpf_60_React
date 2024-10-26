import React from 'react'

export default function About() {
  return (
    <>
    <div id="background" data-bgimage="url(images/background/2.jpg) fixed"></div>
        <div id="content-absolute">

            {/* subheader */}
            <section id="subheader" className="no-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h4>We Are</h4>
                            <h1>Seaside</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section id="section-main" className="no-bg no-top" aria-label="section-menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-6">
                            <div className="spacer-double sm-hide"></div>
                            <img src="images/misc/1.jpg" alt="" className="img-responsive wow fadeInUp" data-wow-duration="1s"/>
                        </div>

                        <div className="col-lg-3 col-6">
                            <img src="images/misc/2.jpg" alt="" className="img-responsive wow fadeInUp" data-wow-duration="1.5s"/>
                        </div>
                        
                        <div className="col-lg-6 wow fadeIn">
                                <div className="padding20">
                                <h2 className="title mb10">The Luxury Experience<br/>You'll Remember
                                    <span className="small-border"></span>
                                </h2>

                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                                <a href="02-room-2-cols.html" className="btn-line"><span>Choose Room</span>s</a>
                                
                                </div>
                        </div>
                        
                        <div className="clearfix"></div>
                    </div>


                    <div className="spacer-double"></div>

                    <div className="row gx-4">
                        <div className="col-lg-12 text-center">
                            <h2 className="title center">Hotel Facilities
                                <span className="small-border"></span>
                            </h2>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-4">
                            <div className="box-icon">
                                <span className="icon bg-color"><img src="images/svg/restaurant-svgrepo-com.svg" alt=""/></span>
                                <div className="text">
                                    <h3 className="style-1">Restaurant</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, eaque ipsa.</p>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-md-4">
                            <div className="box-icon">
                                <span className="icon bg-color"><img src="images/svg/swimming-pool-svgrepo-com.svg" alt=""/></span>
                                <div className="text">
                                    <h3 className="style-1">Swimming Pool</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, eaque ipsa.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="box-icon">
                                <span className="icon bg-color"><img src="images/svg/fitness-gym-svgrepo-com.svg" alt=""/></span>
                                <div className="text">
                                    <h3 className="style-1">Fitness Area</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, eaque ipsa.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="box-icon">
                                <span className="icon bg-color"><img src="images/svg/coffee-table-svgrepo-com.svg" alt=""/></span>
                                <div className="text">
                                    <h3 className="style-1">Mini Bar</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, eaque ipsa.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" >
                            <div className="box-icon">
                                <span className="icon bg-color"><img src="images/svg/meeting-explain-svgrepo-com.svg" alt=""/></span>
                                <div className="text">
                                    <h3 className="style-1">Meeting Room</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, eaque ipsa.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="box-icon">
                                <span className="icon bg-color"><img src="images/svg/laundry-machine-svgrepo-com.svg" alt=""/></span>
                                <div className="text">
                                    <h3 className="style-1">Laundry Service</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, eaque ipsa.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="box-icon">
                                <span className="icon bg-color"><img src="images/svg/screen-tv-svgrepo-com.svg" alt=""/></span>
                                <div className="text">
                                    <h3 className="style-1">Satelite TV</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, eaque ipsa.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="box-icon">
                                <span className="icon bg-color"><img src="images/svg/safebox-svgrepo-com.svg" alt=""/></span>
                                <div className="text">
                                    <h3 className="style-1">Safe Box</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, eaque ipsa.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="box-icon">
                                <span className="icon bg-color"><img src="images/svg/car-parking-svgrepo-com.svg" alt=""/></span>
                                <div className="text">
                                    <h3 className="style-1">Parking Area</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, eaque ipsa.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>
            </div>
    </>
  )
}
