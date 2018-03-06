import React from 'react';

const Team = () => (
  <div>
    {/* <!-- Team --> */}
    <div id="team" className="section md-padding">
      {/* <!-- Container --> */}
      <div className="container">
        {/* <!-- Row --> */}
        <div className="row">
          {/* <!-- Section header --> */}
          <div className="section-header text-center">
            <h2 className="title">Our Team</h2>
          </div>
          {/* <!-- /Section header --> */}

          {/* <!-- team --> */}
          <div className="col-sm-4">
            <div className="team">
              <div className="team-img">
                <img className="img-responsive" src="/img/team1.jpg" alt="" />
                <div className="overlay">
                  <div className="team-social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-content">
                <h3>John Doe</h3>
                <span>Web Designer</span>
              </div>
            </div>
          </div>
          {/* <!-- /team --> */}

          {/* <!-- team --> */}
          <div className="col-sm-4">
            <div className="team">
              <div className="team-img">
                <img className="img-responsive" src="/img/team2.jpg" alt="" />
                <div className="overlay">
                  <div className="team-social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-content">
                <h3>John Doe</h3>
                <span>Web Designer</span>
              </div>
            </div>
          </div>
          {/* <!-- /team --> */}

          {/* <!-- team --> */}
          <div className="col-sm-4">
            <div className="team">
              <div className="team-img">
                <img className="img-responsive" src="/img/team3.jpg" alt="" />
                <div className="overlay">
                  <div className="team-social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-content">
                <h3>John Doe</h3>
                <span>Web Designer</span>
              </div>
            </div>
          </div>
          {/* <!-- /team --> */}
        </div>
        {/* <!-- /Row --> */}
      </div>
      {/* <!-- /Container --> */}
    </div>
    {/* <!-- /Team --> */}
  </div>
);

export default Team;
