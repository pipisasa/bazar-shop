import gql from 'graphql-tag';

export const UPDATE_ME = gql`
  mutation(
    $email: String
    $firstName: String
    $lastName: String
  ) {
    updateUser(
      email: $email,
      firstName: $firstName,
      lastName: $lastName,
    ) {
      user{
        id
        firstName
        lastName
        email
      }
      message
    }
  }
`;
