import { gql } from "@apollo/client";

const getBlogs = gql`
  query GetBlogs {
    blogs {
      nodes {
        featuredImage {
          node {
            sourceUrl
            slug
          }
        }
        slug
        title
        date
      }
    }
  }
`;

export default getBlogs