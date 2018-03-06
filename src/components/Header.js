import React, { Component } from 'react';

class Header extends Component {
  componentDidMount() {
    // Smooth scroll
    $("#nav .main-nav a[href^='#']").on('click', function(e) {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(this.hash).offset().top,
        },
        600,
      );
    });

    // Btn nav collapse
    $('#nav .nav-collapse').on('click', function() {
      $('#nav').toggleClass('open');
    });

    // Mobile dropdown
    $('.has-dropdown a').on('click', function() {
      $(this)
        .parent()
        .toggleClass('open-drop');
    });
  }
  render() {
    return (
      <header id="home">
        {/* <!-- Background Image --> */}
        <div
          className="bg-img"
          style={{ backgroundImage: "url('/img/background1.jpg')" }}
        >
          <div className="overlay" />
        </div>
        {/* <!-- /Background Image --> */}

        {/* <!-- Nav --> */}
        <nav id="nav" className="navbar nav-transparent">
          <div className="container">
            <div className="navbar-header">
              {/* <!-- Logo --> */}
              <div className="navbar-brand">
                <a href="index.html">
                  <img className="logo" src="/img/logo.png" alt="logo" />
                  <img
                    className="logo-alt"
                    src="/img/logo-alt.png"
                    alt="logo"
                  />
                </a>
              </div>
              {/* <!-- /Logo --> */}

              {/* <!-- Collapse nav button --> */}
              <div className="nav-collapse">
                <span />
              </div>
              {/* <!-- /Collapse nav button --> */}
            </div>

            {/* <!--  Main navigation  --> */}
            <ul className="main-nav nav navbar-nav navbar-right">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#pricing">Prices</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li className="has-dropdown">
                <a href="#blog">Blog</a>
                <ul className="dropdown">
                  <li>
                    <a href="blog-single.html">blog post</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            {/* <!-- /Main navigation --> */}
          </div>
        </nav>
        {/* <!-- /Nav --> */}

        {/* <!-- home wrapper --> */}
        <div className="home-wrapper">
          <div className="container">
            <div className="row">
              {/* <!-- home content --> */}
              <div className="col-md-10 col-md-offset-1">
                <div className="home-content">
                  <h1 className="white-text">We Are Creative Agency</h1>
                  <p className="white-text">
                    Morbi mattis felis at nunc. Duis viverra diam non justo. In
                    nisl. Nullam sit amet magna in magna gravida vehicula.
                    Mauris tincidunt sem sed arcu. Nunc posuere.
                  </p>
                  <button className="white-btn">Get Started!</button>
                  <button className="main-btn">Learn more</button>
                </div>
              </div>
              {/* <!-- /home content --> */}
            </div>
          </div>
        </div>
        {/* <!-- /home wrapper --> */}
      </header>
    );
  }
}

export default Header;
