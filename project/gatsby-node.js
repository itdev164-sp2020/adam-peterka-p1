const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProduct {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      result.data.allContentfulProduct.edges.forEach(edge => {
        createPage({
          path: edge.node.slug,
          component: path.resolve(`./src/templates/product.js`),
          context: {
            slug: edge.node.slu,
          },
        })
      })
      resolve()
    })
  })
}
