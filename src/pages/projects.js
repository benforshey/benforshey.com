import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Main = styled.main`
display: grid;
grid-column: gutter;
grid-row: content;
grid-template-columns: [viewport-start] 1vw [gutter-start left-start] minmax(1vw, 1fr) [left-end text-start] minmax(1vw, 50rem) [text-end right-start] minmax(1vw, 1fr) [gutter-end right-end] 1vw [viewport-end];
`
const ProjectList = styled.dl`
grid-column: text;
`

const ProjectsPage = ({ data: { allDatoCmsProject: { edges } } }) => {
  return (
    <Main>
      <Helmet>
        <title>Projects | Ben Forshey</title>
        <script type='application/ld+json'>{`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://www.benforshey.com/projects/",
            "name": "Projects | Ben Forshey",
            "description": "Projects completed by web developer Ben Forshey."
          }
        `}</script>
      </Helmet>
      <ProjectList>
        {edges.map(edge =>
          [
            <dt key={edge.node.link}>
              <a href={edge.node.link} target='_blank' rel='noopener noreferrer'>{edge.node.title}</a>
            </dt>,
            <dd key={edge.node.title} dangerouslySetInnerHTML={{
              __html: edge.node.descriptionNode.childMarkdownRemark.html}}
            />
          ]
        )}
      </ProjectList>
    </Main>
  )
}

export default ProjectsPage

export const query = graphql`
query ProjectsQuery {
  allDatoCmsProject(sort: {fields: [updatedAt], order: DESC}) {
    edges {
      node {
        title
        link
        descriptionNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}
`
