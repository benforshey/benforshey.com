import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import styled from 'styled-components'

import 'typeface-inconsolata'
import '../prism-themes/oceanic-next.css'

const Main = styled.main`
grid-column: content;
grid-row: content;

code,
pre {
  font-family: 'Inconsolata', monospace;
  font-size: .875em;
}
`

const ArticleTemplate = ({ data, pathContext }) => {
  const content = data.datoCmsArticle

  return (
    <Main>
      <HelmetDatoCms seo={content.seoMetaTags} />
      <Helmet>
        <script type='application/ld+json'>{`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://www.benforshey.com/",
            "name": "${content.seo.title} | Ben Forshey",
            "description": "${content.seo.description}",
            "image": "${content.seo.image.url}"
          }
        `}</script>
      </Helmet>
      <article>
        <h1>{content.title}</h1>
        <span>{content.updatedAt}</span>
        <div dangerouslySetInnerHTML={{
          __html: content.body.childMarkdownRemark.html
        }} />
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
      seo {
        title
        description
        image {
          url

        }
      }

      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }

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
