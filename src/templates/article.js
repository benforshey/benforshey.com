import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import 'typeface-ubuntu-mono'
import '../prism-themes/a11y-dark.css'

const Main = styled.main`
  code {
    font-family: 'Ubuntu Mono', monospace;
  }
`

const ArticleTemplate = ({ data, pathContext }) => {
  const content = data.datoCmsArticle

  return (
    <Main>
      <article>
        <h1>{content.title}</h1>
        <span>{content.updatedAt}</span>
        <div dangerouslySetInnerHTML={{__html: content.body.childMarkdownRemark.html}} />
        <div>
          <ul>
            {content.related.map(item =>
              <li key={item.slug}>
                <Link to={`${pathContext.slugPrefix}${item.slug}`}>{item.title}</Link>
              </li>
            )}
          </ul>
        </div>
      </article>
    </Main>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleQueyr($slug: String!) {
    datoCmsArticle(slug: {eq: $slug}) {
      title
      updatedAt(formatString: "MMMM Do, YYYY")
      body: bodyNode {
        childMarkdownRemark {
          html
        }
      }
      related {
        slug
        title
      }
    }
  }
`
