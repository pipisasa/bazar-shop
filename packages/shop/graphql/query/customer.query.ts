import gql from 'graphql-tag';

export const GET_LOGGED_IN_CUSTOMER = gql`
  query getUser($id: String = "1") {
    me {
      # id
      # name
      # email
      # address {
      #   id
      #   type
      #   name
      #   info
      # }
      # contact {
      #   id
      #   type
      #   number
      # }
      # card {
      #   id
      #   type
      #   cardType
      #   name
      #   lastFourDigit
      # }
      id
      email
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
