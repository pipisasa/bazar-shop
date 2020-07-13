import gql from 'graphql-tag';

export const GET_CATEGORIES = gql`
  query {
    allCategories{
      id
      title
      slug
      parent{
        id
        title
        slug
      }
    }
  }
`;