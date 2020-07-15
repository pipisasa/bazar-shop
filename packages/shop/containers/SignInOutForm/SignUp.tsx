import React, { useContext, useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import {
  Button,
  Wrapper,
  Container,
  Heading,
  SubHeading,
  HelperText,
  Offer,
  Input,
  Divider,
  LinkButton,
} from './SignInOutForm.style';
import { Facebook, Google } from 'components/AllSvgIcon';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage } from 'react-intl';
import { CREATE_USER } from '../../graphql/mutation/user';
import { useMutation } from '@apollo/react-hooks';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { color } from 'styled-system';


const a = 0;
class FakeProgressBar extends React.Component{
  state = {
    count: 0,
  };
  intervalId=null;
  componentDidMount=()=>{
    this.intervalId = setInterval(()=>{
      if(this.state.count >= 50){
        clearInterval(this.intervalId)
      };
      this.setState({count: this.state.count+30});
    },300)
  }
  componentWillUnmount=()=>{
    clearInterval(this.intervalId)
  }
  render(){
    return (<ProgressBar total={100} completed={this.state.count}/>)
  }
}

export default function SignOutModal() {
  const { authDispatch, authState } = useContext<any>(AuthContext);
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [registerMutation] = useMutation(CREATE_USER);

  const registerCallback = async(e:FormEvent)=>{
    e.preventDefault();
    authDispatch({
      type:'LOADING'
    })
    try{
      const {data:{createUser:{message}}} = await registerMutation({
        variables:{
          email,
          password
        }
      })
      authDispatch({
        type:'SIGNUP_SUCCESS',
      })
    }catch(err){
      console.log({err})
      authDispatch({
        type:'SIGNUP_ERROR',
        payload: err.message
      })
    }
  }

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN',
    });
  };

  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
        </Heading>

        <SubHeading>
          <FormattedMessage
            id='signUpText'
            defaultMessage='Every fill is required in sign up'
          />
        </SubHeading>
        {authState.currentForm === 'loading' && (<FakeProgressBar/>)}
        {authState.error && <span style={{color:"red"}}>*This email already exists</span>}
        <form onSubmit={registerCallback}>
          <FormattedMessage
            id='emailAddressPlaceholder'
            defaultMessage='Email Address or Contact No.'
          >
            {placeholder => <Input
              type='email'
              placeholder={placeholder}
              value={email}
              onChange={e=>setEmail(e.target.value)}
              required
            />}
          </FormattedMessage>

          <FormattedMessage
            id='passwordPlaceholder'
            defaultMessage='Password (min 6 characters)'
            values={{minCharacter: 6}}
          >
            {placeholder => <Input
              type='text'
              placeholder={placeholder}
              value={password}
              onChange={e=>setPassword(e.target.value)}
              min={6}
              required
            />}
          </FormattedMessage>

          <HelperText style={{ padding: '20px 0 30px' }}>
            <FormattedMessage
              id='signUpText'
              defaultMessage="By signing up, you agree to Pickbazar's"
            />{' '}
            <Link href='/'>
              <a>
                <FormattedMessage
                  id='termsConditionText'
                  defaultMessage='Terms &amp; Condtion'
                />
              </a>
            </Link>
          </HelperText>

          <Button
            fullwidth
            title={'Continue'}
            intlButtonId='continueBtn'
            style={{ color: '#fff' }}
            type="submit"
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
          iconPosition='left'
          className='facebook'
          icon={<Facebook />}
          iconStyle={{ color: '#ffffff', marginRight: 5 }}
          intlButtonId='continueFacebookBtn'
          style={{ color: '#fff' }}
        />

        <Button
          fullwidth
          title={'Continue with Google'}
          className='google'
          iconPosition='left'
          icon={<Google />}
          iconStyle={{ color: '#ffffff', marginRight: 5 }}
          intlButtonId='continueGoogleBtn'
          style={{ color: '#fff' }}
        />
        <Offer style={{ padding: '20px 0' }}>
          <FormattedMessage
            id='alreadyHaveAccount'
            defaultMessage='Already have an account?'
          />{' '}
          <LinkButton onClick={toggleSignInForm}>
            <FormattedMessage id='loginBtnText' defaultMessage='Login' />
          </LinkButton>
        </Offer>
      </Container>
    </Wrapper>
  );
}
