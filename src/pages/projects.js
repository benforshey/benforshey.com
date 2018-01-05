import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Main = styled.main`
grid-column: content;
grid-row: content;
`

const ProjectsPage = ({ data: { allDatoCmsProject: {edges} } }) => {
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
      <dl>
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
      </dl>
    </Main>
  )
}

export default ProjectsPage

export const query = graphql`
query ProjectsQuery {
  allDatoCmsProject(sort: {fields: [updatedAt], order: ASC}) {
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
