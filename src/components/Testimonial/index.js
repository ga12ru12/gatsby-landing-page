import React, { Component } from 'react';

class Testimonial extends Component {
  componentDidMount() {
    $('#testimonial-slider').owlCarousel({
      loop: true,
      margin: 15,
      dots: true,
      nav: false,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        992: {
          items: 2,
        },
      },
    });
  }
  render() {
    return (
      <div>
        {/* <!-- Testimonial --> */}
        <div id="testimonial" className="section md-padding">
          {/* <!-- Background Image --> */}
          <div
            className="bg-img"
            style={{ backgroundImage: "url('/img/background3.jpg')" }}
          >
            <div className="overlay" />
          </div>
          {/* <!-- /Background Image --> */}

          {/* <!-- Container --> */}
          <div className="container">
            {/* <!-- Row --> */}
            <div className="row">
              {/* <!-- Testimonial slider --> */}
              <div className="col-md-10 col-md-offset-1">
                <div id="testimonial-slider" className="owl-carousel owl-theme">
                  {/* <!-- testimonial --> */}
                  <div className="testimonial">
                    <div className="testimonial-meta">
                      <img src="/img/perso1.jpg" alt="" />
                      <h3 className="white-text">John Doe</h3>
                      <span>Web Designer</span>
                    </div>
                    <p className="white-text">
                      Molestie at elementum eu facilisis sed odio. Scelerisque
                      in dictum non consectetur a erat. Aliquam id diam maecenas
                      ultricies mi eget mauris.
                    </p>
                  </div>
                  {/* <!-- /testimonial --> */}

                  {/* <!-- testimonial --> */}
                  <div className="testimonial">
                    <div className="testimonial-meta">
                      <img src="/img/perso2.jpg" alt="" />
                      <h3 className="white-text">John Doe</h3>
                      <span>Web Designer</span>
                    </div>
                    <p className="white-text">
                      Molestie at elementum eu facilisis sed odio. Scelerisque
                      in dictum non consectetur a erat. Aliquam id diam maecenas
                      ultricies mi eget mauris.
                    </p>
                  </div>
                  {/* <!-- /testimonial --> */}
                </div>
              </div>
              {/* <!-- /Testimonial slider --> */}
            </div>
            {/* <!-- /Row --> */}
          </div>
          {/* <!-- /Container --> */}
        </div>
        {/* <!-- /Testimonial --> */}
      </div>
    );
  }
}

export default Testimonial;
