const {
  paginate,
  createArticlePages,
  createArticleListPage
} = require('./gatsby-node-helpers')

// exports.onCreatePage = async ({ page, boundActionCreators }) => {
//   const { createPage } = boundActionCreators

//   return new Promise((resolve, reject) => {
//     if (page.path.match(/^\/violet/)) {
//       page.layout = 'violet'
//     }

//     if (page.path.match(/^\/judah/)) {
//       page.layout = 'judah'
//     }

//     createPage(page)
//     return resolve()
//   })
// }

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

      // paginatedArticles.map(group => {
      //   console.count('group.length:', group.length)
      //   return console.log('group:', group)
      // })

      createArticleListPage(createPage, paginatedArticles)
      createArticlePages(createPage, articles)

      resolve()
    })
  })
}
