import React from 'react';

const Contact = () => (
  <div>
    {/* <!-- Contact --> */}
    <div id="contact" className="section md-padding">
      {/* <!-- Container --> */}
      <div className="container">
        {/* <!-- Row --> */}
        <div className="row">
          {/* <!-- Section-header --> */}
          <div className="section-header text-center">
            <h2 className="title">Get in touch</h2>
          </div>
          {/* <!-- /Section-header --> */}

          {/* <!-- contact --> */}
          <div className="col-sm-4">
            <div className="contact">
              <i className="fa fa-phone" />
              <h3>Phone</h3>
              <p>512-421-3940</p>
            </div>
          </div>
          {/* <!-- /contact --> */}

          {/* <!-- contact --> */}
          <div className="col-sm-4">
            <div className="contact">
              <i className="fa fa-envelope" />
              <h3>Email</h3>
              <p>email@support.com</p>
            </div>
          </div>
          {/* <!-- /contact --> */}

          {/* <!-- contact --> */}
          <div className="col-sm-4">
            <div className="contact">
              <i className="fa fa-map-marker" />
              <h3>Address</h3>
              <p>1739 Bubby Drive</p>
            </div>
          </div>
          {/* <!-- /contact --> */}

          {/* <!-- contact form --> */}
          <div className="col-md-8 col-md-offset-2">
            <form className="contact-form">
              <input type="text" className="input" placeholder="Name" />
              <input type="email" className="input" placeholder="Email" />
              <input type="text" className="input" placeholder="Subject" />
              <textarea className="input" placeholder="Message" />
              <button className="main-btn">Send message</button>
            </form>
          </div>
          {/* <!-- /contact form --> */}
        </div>
        {/* <!-- /Row --> */}
      </div>
      {/* <!-- /Container --> */}
    </div>
    {/* <!-- /Contact --> */}
  </div>
);

export default Contact;
