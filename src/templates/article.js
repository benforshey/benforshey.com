import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import styled from 'styled-components'

import 'typeface-inconsolata'
import '../prism-themes/oceanic-next.css'

const Main = styled.main`
display: grid;
grid-column: gutter;
grid-row: content;
grid-template-columns: [content-start left-start] minmax(1vw, 1fr) [left-end text-start] minmax(1vw, 50rem) [text-end right-start] minmax(1vw, 1fr) [content-end right-end];

code,
pre {
  font-family: 'Inconsolata', monospace;
  font-size: .875em;
}
`

const Article = styled.article`
  display: grid;
  grid-column: content;
  grid-template-columns: [content-start left-start] minmax(1vw, 1fr) [left-end text-start] minmax(1vw, 50rem) [text-end right-start] minmax(1vw, 1fr) [content-end right-end];
`

const Title = styled.h2`
grid-column: text;
`

const MetaData = styled.div`
color: hsl(133, 8%, 33%);
font-weight: 300;
font-family: 'Source Sans Pro', 'Arial', sans-serif;
grid-column: text;
margin-bottom: 1em;
`

const HeroImage = styled.div`
grid-column: content;
height: 10em;
`

const BodyText = styled.section`
grid-column: text;
`

const RelatedArticles = styled.div`
grid-column: text;
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
      <Article>
        <Title>{content.title}</Title>
        <MetaData>
          <span>written {content.datePublished}</span>
          {content.datePublished !== content.updatedAt &&
          <span>; updated {content.updatedAt}</span>
          }
        </MetaData>
        {/* {content.heroImage &&
          <HeroImage />
        } */}
        <BodyText dangerouslySetInnerHTML={{
          __html: content.body.childMarkdownRemark.html
        }} />
        <RelatedArticles>
          <ul>
            {content.related.map(item =>
              <li key={item.slug}>
                <Link to={`${pathContext.slugPrefix}${item.slug}`}>{item.title}</Link>
              </li>
            )}
          </ul>
        </RelatedArticles>
      </Article>
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
      datePublished(formatString: "MMM Do, YYYY")
      updatedAt(formatString: "MMMM Do, YYYY")
      heroImage {
        alt
        sizes(maxWidth: 350, imgixParams: {
          auto: "compress,enhance,format",
          q: 25,
        }) {
          ...GatsbyDatoCmsSizes
        }
      }
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
