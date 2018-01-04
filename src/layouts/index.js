import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'

import 'typeface-source-sans-pro'
import 'typeface-spectral'

import 'normalize.css'
import './index.css'

const Site = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`

const TemplateWrapper = ({ children, data }) => {
  return (
    <Site>
      <Helmet>
        <html lang={data.datoCmsSite.locale} />
        <script type='application/ld+json'>{`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://www.benforshey.com",
            "name": "Ben Forshey&rsquo;s Site",
            "description": "",
            "image": ""
          }
        `}</script>

      </Helmet>
      <HelmetDatoCms
        favicon={data.datoCmsSite.faviconMetaTags}
      />
      <Header
        links={[
          {href: '/', name: 'about'},
          {href: '/projects/', name: 'projects'},
          {href: '/articles/', name: 'articles'}
        ]}
      />
      {children()}
      <Footer />
    </Site>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
query LayoutIndex {
  datoCmsSite {
    locale
    globalSeo {
      siteName
    }
    faviconMetaTags {
      ...GatsbyDatoCmsFaviconMetaTags
    }
  }
}
`
