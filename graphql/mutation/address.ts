import gql from 'graphql-tag';

export const ADD_NEW_ADDRESS = gql`
  mutation(
    $name: String!
    $info: String!
  ){
    createAddress(
      name:$name
      information:$info
    ){
      address{
        id
        slug
        name
        info
      }
    }
  }
`

export const UPDATE_ADDRESS = gql`
  mutation(
    $info: String!
    $name: String!
    $slug: String!
  ) {
    updateAddress(
      slug:$slug
      name:$name
      information:$info
      type:"secondary"
    ){
      address{
        id
        slug
        name
        info
      }
    }
  }
`;
export const DELETE_ADDRESS = gql`
  mutation($slug: String!) {
    deleteAddress(slug: $slug) {
      ok
    }
  }
`;
