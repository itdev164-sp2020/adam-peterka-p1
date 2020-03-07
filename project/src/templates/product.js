import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Product = ({ data }) => {
  const { title } = data.contentfulProduct
  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
  )
}

export default Product

export const pageQuery = graphql`
  query productQuery($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      title
      slug
    }
  }
`
