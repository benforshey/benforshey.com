import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import styled from 'styled-components'
import { rakishRotation, fadePopIn } from '../css/keyframes'

const Main = styled.main`

`

const Image = styled.img`
  animation: .3s cubic-bezier(0, 1, 1, 1.25) .3s forwards ${rakishRotation};
  width: 100%;
`

const ImageContainer = styled.div`
  animation: .3s cubic-bezier(0, 1, .2, 1) forwards ${fadePopIn};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%231f2321' fill-opacity='0.25'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0;
  transform: scale(.8);
  padding: 3vw;
  position: relative;
  width: 15em;
  height: 15em;

  &:hover {
    background-image: none;
  }

  &::before {
    content: '';
    background-image: linear-gradient(45deg, hsla(39, 100%, 63%, .3), hsla(152, 37%, 46%, .3));
    opacity: 0;
    position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    transition: opacity .2s ease-out;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }
`

const IndexPage = ({ data: { about } }) => {
  return (
    <Main>
      <HelmetDatoCms seo={about.seo} />
      <ImageContainer>
        <Image src={about.img.sizes.src} srcset={about.img.sizes.srcSet} sizes={about.img.sizes.sizes} alt={about.img.alt} />
      </ImageContainer>
      <div
        dangerouslySetInnerHTML={{
          __html: about.bio.childMarkdownRemark.html
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: about.now.childMarkdownRemark.html
        }}
      />
    </Main>
  )
}

export default IndexPage

export const query = graphql`
query IndexPageQuery {
  about: datoCmsAboutPage {

    seo: seoMetaTags {
      ...GatsbyDatoCmsSeoMetaTags
    }

    img: headshot {
      alt
      sizes(maxWidth: 300, imgixParams: {
        fm: "png",
        auto: "compress",
        w: "300",
        h: "300",
        mask: "ellipse"
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

    now: nowNode {
      childMarkdownRemark {
        html
      }
    }
  }
}
`
