import React, { useContext } from 'react';
import {
  Button,
  Wrapper,
  Container,
  Heading,
  SubHeading,
} from './SignInOutForm.style';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage } from 'react-intl';

export default function SignOutModal() {
  const { authDispatch, authState } = useContext<any>(AuthContext);
  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN',
    });
  };

  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id='intlSuccess' defaultMessage='Success' />
        </Heading>

        <SubHeading>
          <FormattedMessage
            id='intlCheckYourEmail'
            defaultMessage='Check your email to verify your account'
          />
        </SubHeading>

        <br/>
        <br/>
        
        <Button
          fullwidth
          title={'Continue'}
          intlButtonId='continueBtn'
          style={{ color: '#fff' }}
          onClick={toggleSignInForm}
          type="submit"
        />
        <br/>
        <br/>
        <br/>
      </Container>
    </Wrapper>
  );
}
