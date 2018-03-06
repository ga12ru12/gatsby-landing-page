import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Service from '../components/Service';
import WhyChooseUs from '../components/WhyChooseUs';
import Numbers from '../components/Numbers';
import Pricing from '../components/Pricing';
import Testimonial from '../components/Testimonial';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        <Header />
        <About />
        <Portfolio />
        <Service />
        <WhyChooseUs />
        <Numbers />
        <Pricing />
        <Testimonial />
        <Team />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
