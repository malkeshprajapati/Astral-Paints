import { gql } from "@apollo/client";

const getColorCategory = gql`
  query GetColourCategory {
    allColourCategory(where: { slug: "popular" }) {
      nodes {
        name
        colours {
          nodes {
            title
            slug
            colourInfo {
              selectColor
              colourRgb
            }
          }
        }
      }
    }
  }
`;

export default getColorCategory