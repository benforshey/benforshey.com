import React from 'react'
import Link from 'gatsby-link'
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
      {renderArticleList(pathContext)}
    </Main>
  )
}

export default CraftListTemplate
