import gql from 'graphql-tag';

export const CREATE_USER = gql`
  mutation registerUser(
    $email: String!
    $password: String!
  ){
    createUser(
      email: $email
      password: $password
      userType: "1"
    ){
      message
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`
