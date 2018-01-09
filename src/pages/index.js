import React from 'react'
import Helmet from 'react-helmet'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import styled from 'styled-components'
import { rakishRotation, fadePopIn } from '../css/keyframes'

const Main = styled.main`
grid-column: content;
grid-row: content;
`
const Bio = styled.section`
margin-top: 1.5em;

&::after {
  content: '';
  display: table;
  clear: both;
}

h2 {
  margin-top: 0;
}
`

const Image = styled.img`
animation: .3s cubic-bezier(.25, .25, 0, 1.5) .2s forwards ${rakishRotation};
width: 100%;
`

const ImageContainer = styled.div`
animation: .2s cubic-bezier(0, 1, .2, 1) forwards ${fadePopIn};
${'' /* background-image: linear-gradient(
  45deg,
  hsla(152, 37%, 46%, .8),
  hsla(39, 100%, 63%, .8)
); */}
background-image: linear-gradient(
  45deg,
  hsla(152, 37%, 46%, .8),
  hsla(52, 100%, 65%, .8)
);
clip-path: circle(50% at 50% 50%);
float: left;
height: calc(5em + 15vw);
margin: 0 2.5vw 0 -.25em;
opacity: 0;
padding: .5vw;
position: relative;
shape-outside: circle();
transform: scale(.8);
width: calc(5em + 15vw);
max-width: calc(21.875rem + 1vw);
max-height: calc(21.875rem + 1vw);
`

const Now = styled.article`
display: grid;
grid-gap: 0 2.5vw;
grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
grid-template-rows: auto;
margin-top: 1.5em;

ul {
  list-style: none;
}

li {
  position: relative;
}

li::before {
  content: '–';
  position: absolute;
    left: -1em;
}

li > p {
  margin-bottom: 0;
  font-weight: 400;
}
`

const Work = styled.section`

`

const Read = styled.section`

`

const IndexPage = ({ data: { about } }) => {
  return (
    <Main>
      <HelmetDatoCms seo={about.seoMetaTags} />
      <Helmet>
        <script type='application/ld+json'>{`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://www.benforshey.com/",
            "name": "${about.seo.title} | Ben Forshey",
            "description": "${about.seo.description}",
            "image": "${about.seo.image.url}"
          }
        `}</script>
      </Helmet>
      <Bio>
        <ImageContainer>
          <Image src={about.img.sizes.src} srcSet={about.img.sizes.srcSet} sizes={about.img.sizes.sizes} alt={about.img.alt} />
        </ImageContainer>
        <h2>About Me, Professionally</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: about.bio.childMarkdownRemark.html
          }}
        />
      </Bio>
      <Now>
        <Work>
          <h2>What I&rsquo;m Working On</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: about.workNode.childMarkdownRemark.html
            }}
          />
        </Work>
        <Read>
          <h2>What I&rsquo;m Reading</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: about.readNode.childMarkdownRemark.html
            }}
          />
        </Read>
      </Now>
    </Main>
  )
}

export default IndexPage

export const query = graphql`
query IndexPageQuery {
  about: datoCmsAboutPage {

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

    img: headshot {
      alt
      sizes(maxWidth: 350, imgixParams: {
        auto: "compress,enhance,format",
        colorquant: 8,
        mask: "ellipse"
        q: 25,
      }) {
        src
        srcSet
        sizes
      }
    }

    bio: biographyNode {
      childMarkdownRemark {
        html
      }
    }

    workNode {
      childMarkdownRemark {
        html
      }
    }

    readNode {
      childMarkdownRemark {
        html
      }
    }

  }
}
`
