import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ul>
      {data.allContentfulProduct.edges.map(edge => (
        <li>
          <Link to={edge.node.slug} key={edge.node.id}>
            {edge.node.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`
