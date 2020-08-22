import gql from 'graphql-tag';

export const GET_CATEGORIES = gql`
  query {
    allCategories{
      id
      title
      slug
      children{
        id
        title
        slug
        children{
          id
          title
          slug
          children{
            id
            title
            slug
          }
        }
      }
    }
  }
`;