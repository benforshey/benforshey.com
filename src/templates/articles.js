import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Main = styled.main`
grid-column: content;
grid-row: content;
`
// TODO: create actual pagination links

function handleCreatedOrUpdated (created, updated) {

}

function renderArticleList (context) {
  console.log(context)
  return context.group.map(({ node }) => {
    return (
      <article key={node.slug}>
        <h2>
          <Link to={`${context.slugPrefix}${node.slug}`}>{node.title}</Link>
        </h2>
        <ul>
          <li>written {node.datePublished}</li>
          {node.updatedAt !== node.datePublished &&
          <li>updated {node.updatedAt}</li>
          }
          <li>
            {node.bodyNode.childMarkdownRemark.timeToRead} { node.bodyNode.childMarkdownRemark.timeToRead > 9
            ? 'minutes'
            : 'minute'
            } to read
          </li>
        </ul>
        <div>
          <p>{node.bodyNode.childMarkdownRemark.excerpt}</p>
          {<Link to={`${context.slugPrefix}${node.slug}`}>Read this Article</Link>}
        </div>
      </article>
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
            "url": "https://www.benforshey.com/articles/",
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
