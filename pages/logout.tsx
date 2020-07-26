import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AuthContext } from 'contexts/auth/auth.context';
// the redirect will only happen on the client-side. This is by design,
const Index: React.FC = () => {
  const {authDispatch} = useContext<any>(AuthContext)
  useEffect(()=>{
    authDispatch({type:'SIGN_OUT'})
  },[])
  const router = useRouter();
  React.useEffect(() => {
    router.replace('/');
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;
