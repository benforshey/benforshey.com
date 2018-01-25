import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import 'typeface-fira-sans/index.css';
import 'typeface-fira-sans-condensed/index.css';
import 'normalize.css';
import './index.css';

import Header from '../components/header';
// import Footer from '../components/footer';


const Site = styled.div`
display: grid;
grid-template-columns: [viewport-start] 1vw [gutter-start] 1fr [gutter-end] 1vw [viewport-end];
grid-template-rows: [header-start] 4em [header-end content-start] auto [content-end footer-start] 6em [footer-end];
grid-gap: 0 1vw;
`;

const TemplateWrapper = ({ children, data }) => (
  <Site>
    <Helmet>
      <html lang={data.datoCmsSite.locale} />
      <title>{data.datoCmsSite.globalSeo.siteName}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0a5f71" />
      <meta name="theme-color" content="#0a5f71" />
    </Helmet>
    <Header
      links={[
        { href: '/', name: 'about' },
        { href: '/projects/', name: 'projects' },
        { href: '/articles/', name: 'articles' },
      ]}
    />
    {children()}
    {/* <Footer /> */}
  </Site>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    datoCmsSite: PropTypes.object,
  }).isRequired,
};

export default TemplateWrapper;

export const query = graphql`
query LayoutIndex {
  datoCmsSite {
    locale
    globalSeo {
      siteName
    }
  }
}
`;
