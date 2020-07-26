import React, { useContext, useState, useEffect } from 'react';
import {
  LinkButton,
  Button,
  Wrapper,
  Container,
  Heading,
  SubHeading,
  OfferSection,
  Offer,
  Input,
  Divider,
} from './SignInOutForm.style';
import { Facebook, Google } from 'components/AllSvgIcon';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage } from 'react-intl';
import { closeModal } from '@redq/reuse-modal';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../graphql/mutation/user';

export default function SignInModal() {
  const { authDispatch } = useContext<any>(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const toggleSignUpForm = () => {
    authDispatch({
      type: 'SIGNUP',
    });
  };

  const toggleForgotPassForm = () => {
    authDispatch({
      type: 'FORGOTPASS',
    });
  };

  const [loginMutation] = useMutation(LOGIN_USER);

  const loginCallback = async (e) => {
    e.preventDefault();
    try{
      const {data:{loginUser:{token}}} = await loginMutation({
        variables:{
          email,
          password
        }
      })
      console.log(token)
      if(!token){
        closeModal();
        return;
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', JSON.stringify({token}));
        authDispatch({ type: 'SIGNIN_SUCCESS' });
        closeModal();
      }
    }catch(err){
      closeModal();
      return;
    }
  };

  return (
    <Wrapper>
      <Container>
        {/* <LogoWrapper>
          <Image url={PickBazar} />
        </LogoWrapper> */}

        <Heading>
          <FormattedMessage id='welcomeBack' defaultMessage='Welcome Back' />
        </Heading>

        <SubHeading>
          <FormattedMessage
            id='loginText'
            defaultMessage='Login with your email &amp; password'
          />
        </SubHeading>
        <form onSubmit={loginCallback}>
          <FormattedMessage
            id='emailAddressPlaceholder'
            defaultMessage='Email Address.'
          >
            {(placeholder) => (
              <Input
                type='email'
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            )}
          </FormattedMessage>

          <FormattedMessage
            id='passwordPlaceholder'
            defaultMessage='Password (min 6 characters)'
            values={{ minCharacter: 6 }}
          >
            {(placeholder) => (
              <Input
                type='password'
                placeholder={placeholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            )}
          </FormattedMessage>

          <Button
            fullwidth
            title={'Continue'}
            intlButtonId='continueBtn'
            type='submit'
            style={{ color: '#fff' }}
          />
        </form>
        <Divider>
          <span>
            <FormattedMessage id='orText' defaultMessage='or' />
          </span>
        </Divider>

        <Button
          fullwidth
          title={'Continue with Facebook'}
          className='facebook'
          icon={<Facebook />}
          iconPosition='left'
          iconStyle={{ color: '#ffffff', marginRight: 5 }}
          intlButtonId='continueFacebookBtn'
          style={{ color: '#fff' }}
        />

        <Button
          fullwidth
          title={'Continue with Google'}
          className='google'
          icon={<Google />}
          iconPosition='left'
          iconStyle={{ color: '#ffffff', marginRight: 5 }}
          intlButtonId='continueGoogleBtn'
          style={{ color: '#fff' }}
        />

        <Offer style={{ padding: '20px 0' }}>
          <FormattedMessage
            id='dontHaveAccount'
            defaultMessage="Don't have any account?"
          />{' '}
          <LinkButton onClick={toggleSignUpForm}>
            <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
          </LinkButton>
        </Offer>
      </Container>

      <OfferSection>
        <Offer>
          <FormattedMessage
            id='forgotPasswordText'
            defaultMessage='Forgot your password?'
          />{' '}
          <LinkButton onClick={toggleForgotPassForm}>
            <FormattedMessage id='resetText' defaultMessage='Reset It' />
          </LinkButton>
        </Offer>
      </OfferSection>
    </Wrapper>
  );
}
