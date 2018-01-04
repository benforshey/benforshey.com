import React from 'react'
import styled from 'styled-components'

const Main = styled.main`

`

const ProjectsPage = ({ data: { allDatoCmsProject: {edges} } }) => {
  return (
    <Main>
      <dl>
        {edges.map(edge =>
          [
            <dt key={edge.node.link}>
              <a href={edge.node.link} target='_blank' rel='noopener noreferrer'>{edge.node.title}</a>
            </dt>,
            <dd dangerouslySetInnerHTML={{
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
