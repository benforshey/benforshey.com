const {
  paginate,
  createArticlePages,
  createArticleListPage
} = require('./gatsby-node-helpers')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
    {
      allDatoCmsArticle(sort: {fields: [datePublished], order: ASC}) {
        edges {
          node {
            model {
              name
            }

            title
            slug
            updatedAt
            datePublished
            seo {
              title
              description
            }

            related {
              title
              slug
            }

            heroImage {
              alt
              sizes {
                src
              }
            }

            bodyNode {
              childMarkdownRemark {
                html
                timeToRead
              }
            }
          }
        }
      }

    }
    `).then(({ data }) => {
      const articles = data.allDatoCmsArticle.edges
      const paginatedArticles = paginate(articles)

      createArticleListPage(createPage, paginatedArticles)
      createArticlePages(createPage, articles)

      resolve()
    })
  })
}
