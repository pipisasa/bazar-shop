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
        Type
        name
        info
      }
      contacts{
        id
        Type
        number
      }
      cards{
        id
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
