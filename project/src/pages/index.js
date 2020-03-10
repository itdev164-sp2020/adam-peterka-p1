import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #d4a115;
  font-weight: bold;
  font-size: 17px;
`
const LinkBox = styled.div`
  margin: 0;
  padding: 0;
  max-width: 150px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  min-width: 150px;
`

const ProductBox = styled.div`
  display: flex;
  flex: 1;
  flex-basis: 0;
  flex-direction: row;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div
      dangerouslySetInnerHTML={{
        __html: data.pageLoad.text.childMarkdownRemark.html,
      }}
    ></div>
    <ProductBox>
      {data.productLoad.edges.map(edge => (
        <LinkBox>
          <StyledLink to={edge.node.slug} key={edge.node.id}>
            {edge.node.title}
            <img src={edge.node.image.fluid.src} alt="product" />
          </StyledLink>
        </LinkBox>
      ))}
    </ProductBox>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    pageLoad: contentfulPage(name: { eq: "Index" }) {
      text {
        childMarkdownRemark {
          html
        }
      }
    }

    productLoad: allContentfulProduct {
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
