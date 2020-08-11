import gql from 'graphql-tag';

export const GET_LOGGED_IN_CUSTOMER = gql`
  query {
    me{
      id
      email
      firstName
      lastName
      address {
        id
        slug
        Type
        name
        info
      }
      contacts{
        id
        slug
        Type
        number
      }
      cards{
        id
        slug
        Type
        cardType
        name{
          firstName
          lastName
        }
        lastFourDigit
      }
    }
  }
`;

export const GET_ME:any = gql`
  query{
    me{
      id
      email
    }
  }
`
