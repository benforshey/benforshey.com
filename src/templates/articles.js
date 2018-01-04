import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Main = styled.main`
  ${''}
`
// TODO: create actual pagination links

function renderArticleList (context) {
  console.log('context:', context)
  return context.group.map(({ node }) => {
    return (
      <Link to={`${context.slugPrefix}${node.slug}`} key={node.slug}>
        <h2>{node.title}</h2>
      </Link>
    )
  })
}

const CraftListTemplate = ({ pathContext }) => {
  return (
    <Main>
      <Helmet>
        <title>Articles | Ben Forshey</title>
        <script type='application/ld+json'>{`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://www.benforshey.com/articles",
            "name": "Articles | Ben Forshey",
            "description": "Lessons learned, insights, and more by web developer Ben Forshey."
          }
        `}</script>
      </Helmet>
      {renderArticleList(pathContext)}
    </Main>
  )
}

export default CraftListTemplate
