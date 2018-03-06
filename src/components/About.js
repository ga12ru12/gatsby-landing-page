import React from 'react';

const About = () => (
  <div>
    {/* <!-- About --> */}
    <div id="about" className="section md-padding">
      {/* <!-- Container --> */}
      <div className="container">
        {/* <!-- Row --> */}
        <div className="row">
          {/* <!-- Section header --> */}
          <div className="section-header text-center">
            <h2 className="title">Welcome to Website</h2>
          </div>
          {/* <!-- /Section header --> */}

          {/* <!-- about --> */}
          <div className="col-md-4">
            <div className="about">
              <i className="fa fa-cogs" />
              <h3>Fully Customizible</h3>
              <p>
                Maecenas tempus tellus eget condimentum rhoncus sem quam semper
                libero sit amet.
              </p>
              <a href="#">Read more</a>
            </div>
          </div>
          {/* <!-- /about --> */}

          {/* <!-- about --> */}
          <div className="col-md-4">
            <div className="about">
              <i className="fa fa-magic" />
              <h3>Awesome Features</h3>
              <p>
                Maecenas tempus tellus eget condimentum rhoncus sem quam semper
                libero sit amet.
              </p>
              <a href="#">Read more</a>
            </div>
          </div>
          {/* <!-- /about --> */}

          {/* <!-- about --> */}
          <div className="col-md-4">
            <div className="about">
              <i className="fa fa-mobile" />
              <h3>Fully Responsive</h3>
              <p>
                Maecenas tempus tellus eget condimentum rhoncus sem quam semper
                libero sit amet.
              </p>
              <a href="#">Read more</a>
            </div>
          </div>
          {/* <!-- /about --> */}
        </div>
        {/* <!-- /Row --> */}
      </div>
      {/* <!-- /Container --> */}
    </div>
    {/* <!-- /About --> */}
  </div>
);

export default About;
