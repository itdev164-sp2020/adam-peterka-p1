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
          <div>
            <img src={edge.node.image.fluid.src} alt="product" />
          </div>
          {/* <div>${edge.node.price}</div> */}
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allContentfulProduct {
      edges {
        node {
          id
          title
          slug
          image {
            fluid(maxWidth: 70, maxHeight: 100) {
              src
            }
          }
          price
          description {
            description
          }
        }
      }
    }
  }
`
