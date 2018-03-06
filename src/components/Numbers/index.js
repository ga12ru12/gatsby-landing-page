import React from 'react';

const Numbers = () => (
  <div>
    {/* <!-- Numbers --> */}
    <div id="numbers" className="section sm-padding">
      {/* <!-- Background Image --> */}
      <div
        className="bg-img"
        style={{ backgroundImage: "url('/img/background2.jpg')" }}
      >
        <div className="overlay" />
      </div>
      {/* <!-- /Background Image --> */}

      {/* <!-- Container --> */}
      <div className="container">
        {/* <!-- Row --> */}
        <div className="row">
          {/* <!-- number --> */}
          <div className="col-sm-3 col-xs-6">
            <div className="number">
              <i className="fa fa-users" />
              <h3 className="white-text">
                <span className="counter">451</span>
              </h3>
              <span className="white-text">Happy clients</span>
            </div>
          </div>
          {/* <!-- /number --> */}

          {/* <!-- number --> */}
          <div className="col-sm-3 col-xs-6">
            <div className="number">
              <i className="fa fa-trophy" />
              <h3 className="white-text">
                <span className="counter">12</span>
              </h3>
              <span className="white-text">Awards won</span>
            </div>
          </div>
          {/* <!-- /number --> */}

          {/* <!-- number --> */}
          <div className="col-sm-3 col-xs-6">
            <div className="number">
              <i className="fa fa-coffee" />
              <h3 className="white-text">
                <span className="counter">154</span>K
              </h3>
              <span className="white-text">Cups of Coffee</span>
            </div>
          </div>
          {/* <!-- /number --> */}

          {/* <!-- number --> */}
          <div className="col-sm-3 col-xs-6">
            <div className="number">
              <i className="fa fa-file" />
              <h3 className="white-text">
                <span className="counter">45</span>
              </h3>
              <span className="white-text">Projects completed</span>
            </div>
          </div>
          {/* <!-- /number --> */}
        </div>
        {/* <!-- /Row --> */}
      </div>
      {/* <!-- /Container --> */}
    </div>
    {/* <!-- /Numbers --> */}
  </div>
);

export default Numbers;
