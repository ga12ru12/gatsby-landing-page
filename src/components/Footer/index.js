import React from 'react';

const Footer = () => (
  <div>
    {/* <!-- Footer --> */}
    <footer id="footer" className="sm-padding bg-dark">
      {/* <!-- Container --> */}
      <div className="container">
        {/* <!-- Row --> */}
        <div className="row">
          <div className="col-md-12">
            {/* <!-- footer logo --> */}
            <div className="footer-logo">
              <a href="/">
                <img src="/img/logo-alt.png" alt="logo" />
              </a>
            </div>
            {/* <!-- /footer logo --> */}

            {/* <!-- footer follow --> */}
            <ul className="footer-follow">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube" />
                </a>
              </li>
            </ul>
            {/* <!-- /footer follow --> */}

            {/* <!-- footer copyright --> */}
            <div className="footer-copyright">
              <p>
                Copyright © 2017. All Rights Reserved. Designed by{' '}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
            {/* <!-- /footer copyright --> */}
          </div>
        </div>
        {/* <!-- /Row --> */}
      </div>
      {/* <!-- /Container --> */}
    </footer>
    {/* <!-- /Footer --> */}
  </div>
);

export default Footer;
