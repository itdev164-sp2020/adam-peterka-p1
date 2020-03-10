import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const Image = styled.img`
  max-width: 250px;
  max-height: 250px;
`
const Product = ({ data }) => {
  const { title, price, image, description } = data.contentfulProduct
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <h2>${price}</h2>
        <h3>{description.description}</h3>
        <Image alt={title} src={image.file.url} />
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}

export default Product

export const pageQuery = graphql`
  query productQuery($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      title
      slug
      description {
        description
      }
      image {
        file {
          url
        }
      }
      price
    }
  }
`
