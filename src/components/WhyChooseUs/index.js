import React, { Component } from 'react';

class WhyChooseUs extends Component {
  componentDidMount() {
    // Owl Carousel
    $('#about-slider').owlCarousel({
      items: 1,
      loop: true,
      margin: 15,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: true,
      autoplay: true,
      animateOut: 'fadeOut',
    });
  }
  render() {
    return (
      <div>
        {/* <!-- Why Choose Us --> */}
        <div id="features" className="section md-padding bg-grey">
          {/* <!-- Container --> */}
          <div className="container">
            {/* <!-- Row --> */}
            <div className="row">
              {/* <!-- why choose us content --> */}
              <div className="col-md-6">
                <div className="section-header">
                  <h2 className="title">Why Choose Us</h2>
                </div>
                <p>
                  Molestie at elementum eu facilisis sed odio. Scelerisque in
                  dictum non consectetur a erat. Aliquam id diam maecenas
                  ultricies mi eget mauris. Ultrices sagittis orci a scelerisque
                  purus.
                </p>
                <div className="feature">
                  <i className="fa fa-check" />
                  <p>Quis varius quam quisque id diam vel quam elementum.</p>
                </div>
                <div className="feature">
                  <i className="fa fa-check" />
                  <p>Mauris augue neque gravida in fermentum.</p>
                </div>
                <div className="feature">
                  <i className="fa fa-check" />
                  <p>Orci phasellus egestas tellus rutrum.</p>
                </div>
                <div className="feature">
                  <i className="fa fa-check" />
                  <p>
                    Nec feugiat nisl pretium fusce id velit ut tortor pretium.
                  </p>
                </div>
              </div>
              {/* <!-- /why choose us content --> */}

              {/* <!-- About slider --> */}
              <div className="col-md-6">
                <div id="about-slider" className="owl-carousel owl-theme">
                  <img
                    className="img-responsive"
                    src="/img/about1.jpg"
                    alt=""
                  />
                  <img
                    className="img-responsive"
                    src="/img/about2.jpg"
                    alt=""
                  />
                  <img
                    className="img-responsive"
                    src="/img/about1.jpg"
                    alt=""
                  />
                  <img
                    className="img-responsive"
                    src="/img/about2.jpg"
                    alt=""
                  />
                </div>
              </div>
              {/* <!-- /About slider --> */}
            </div>
            {/* <!-- /Row --> */}
          </div>
          {/* <!-- /Container --> */}
        </div>
        {/* <!-- /Why Choose Us --> */}
      </div>
    );
  }
}

export default WhyChooseUs;
