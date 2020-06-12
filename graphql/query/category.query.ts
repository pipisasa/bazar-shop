import gql from 'graphql-tag';

export const GET_CATEGORIES = gql`
  query {
    allCategories{
      id
      title
      icon
      slug
      children{
        id
        title
        icon
        slug
      }
    }
  }
`;