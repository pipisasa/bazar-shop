import React, { useEffect } from 'react'
import AuthenticationForm from 'containers/SignInOutForm/Form'
import { AuthContext } from 'contexts/auth/auth.context';
import { openModal, Modal } from '@redq/reuse-modal';
import { withApollo } from 'helper/apollo';

import Button from 'components/Button/Button';
import LoginSvg from '../image/Mobile-login-bro.svg';
import styled from 'styled-components';
import Router from 'next/router';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 150px 0 50px 0;
`
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Col = styled.div`
  width: 50%;
  padding: 0 15px;
  @media screen and (max-width: 990px){
    text-align:center;
    width:100%;
  }
`

function Login() {
  const {
    authState: { isAuthenticated },
    authDispatch,
  } = React.useContext<any>(AuthContext);
  const onJoin = ()=>{
    authDispatch({
      type: 'SIGNIN',
    });

    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto',
      },
    });
  }
  useEffect(onJoin,[]);
  useEffect(()=>{
    if(isAuthenticated){
      Router.push('/')
    }
  },[isAuthenticated])
  return (
    <div>
      <Container>
        <Row>
          <Col style={{display: "flex", flexDirection:"column", justifyContent:"center"}}>
            <h1>Please Login</h1>
            <Button
              onClick={onJoin}
              size="medium"
              title="Join"
              style={{ fontSize: 15, color: '#fff' }}
              intlButtonId="joinButton"
            />
          </Col>
          <Col style={ {justifyContent:"center"}}>
            <img style={{width: '100%'}} src={LoginSvg} alt="login-bro"/>
          </Col>
        </Row>
      </Container>
        <Modal/>
    </div>
  )
}

export default withApollo(Login)
