import gql from 'graphql-tag';

export const CREATE_CONTACT = gql`
  mutation(
    $number: String !
  ){
    createContact(
      number:$number
      type:"secondary"
    ){
      contact{
        id
        slug
        number
        Type
      }
    }
  }
`

export const UPDATE_CONTACT = gql`
  mutation(
    $slug: String!
    $number: String!
    $type: String!
  ) {
    updateContact(
      slug:$slug
      number:$number
      type:$type
    ){
      contact{
        id
        slug
        number
        Type
      }
    }
  }
`;
export const DELETE_CONTACT = gql`
  mutation($slug: String!) {
    deleteContact(slug: $slug) {
      ok
    }
  }
`;
