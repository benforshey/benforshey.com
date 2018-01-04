const path = require('path')

exports.paginate = function paginate (group, perPage = 10) {
  return group
  .map(({ node }, index) => {
    // slice every "perPage"
    return index % perPage === 0
      ? group.slice(index, index + perPage)
      : null
  })
  .filter(item => item)
}

exports.createArticleListPage = function createArticleListPage (
  createPage,
  categoryGroup
) {
  return categoryGroup
  .map((group, index, groups) => {
    const pageIndex = index === 0 ? `` : `${index + 1}/`
    const first = index === 0
    const last = index === groups.length - 1

    return createPage({
      path: `/articles/${pageIndex}`,
      component: path.resolve(`src/templates/articles.js`),
      context: {
        slugPrefix: `/articles/`,
        group,
        first,
        last,
        pageIndex
      }
    })
  })
}

exports.createArticlePages = function createArticlePages (
  createPage,
  categoryPages
) {
  return categoryPages
  .map(({ node }) => {
    return createPage({
      path: `articles/${node.slug}/`,
      component: path.resolve(`./src/templates/${node.model.name.toLowerCase()}.js`),
      context: {
        slugPrefix: `/articles/`,
        slug: node.slug
      }
    })
  })
}
