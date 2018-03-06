import React from 'react';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>Home | Enouvo</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {/* <!-- Google font --> */}
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CVarela+Round"
            rel="stylesheet"
          />

          {/* <!-- Bootstrap --> */}
          <link
            type="text/css"
            rel="stylesheet"
            href="/css/bootstrap.min.css"
          />

          {/* <!-- Owl Carousel --> */}
          <link type="text/css" rel="stylesheet" href="/css/owl.carousel.css" />
          <link
            type="text/css"
            rel="stylesheet"
            href="/css/owl.theme.default.css"
          />

          {/* <!-- Magnific Popup --> */}
          <link
            type="text/css"
            rel="stylesheet"
            href="/css/magnific-popup.css"
          />

          {/* <!-- Font Awesome Icon --> */}
          <link rel="stylesheet" href="/css/font-awesome.min.css" />

          {/* <!-- Custom stlylesheet --> */}
          <link type="text/css" rel="stylesheet" href="/css/style.css" />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          {/* <!-- Back to top --> */}
          <div id="back-to-top" />
          {/* <!-- /Back to top --> */}

          {/* <!-- Preloader --> */}
          <div id="preloader">
            <div class="preloader">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          {/* <!-- /Preloader --> */}

          {/* <!-- jQuery Plugins --> */}
          <script type="text/javascript" src="/js/jquery.min.js" />
          <script type="text/javascript" src="/js/bootstrap.min.js" />
          <script type="text/javascript" src="/js/owl.carousel.min.js" />
          <script type="text/javascript" src="/js/jquery.magnific-popup.js" />
          <script type="text/javascript" src="/js/main.js" />
        </body>
      </html>
    );
  }
};
