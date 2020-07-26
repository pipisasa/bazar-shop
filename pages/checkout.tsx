import React from 'react';
import { NextPage } from 'next';
import { useQuery } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from 'helper/apollo';
import { SEO } from 'components/seo';
import Checkout from 'containers/CheckoutWithSidebar/CheckoutWithSidebar';
import { GET_LOGGED_IN_CUSTOMER } from 'graphql/query/customer.query';

import { ProfileProvider } from 'contexts/profile/profile.provider';
import Router from 'next/router';
import { AuthContext } from 'contexts/auth/auth.context';

type Props = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const CheckoutPage: NextPage<Props> = ({ deviceType }) => {
  const {
    authState: { isAuthenticated }
  } = React.useContext<any>(AuthContext);
  const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
  if (loading) {
    return <div style={{margin:"150px 0 0 0"}}>loading...</div>;
  }
  if(error || !isAuthenticated) {
    Router.push('/login');
    return null
  }

  if (error) return <div style={{margin:"150px 0 0 0"}}>{error.message}</div>;
  const token = 'true';

  return (
    <>
      <SEO title='Checkout - PickBazar' description='Checkout Details' />
      <ProfileProvider initData={data.me}>
        <Modal>
          <Checkout token={token} deviceType={deviceType} />
        </Modal>
      </ProfileProvider>
    </>
  );
};

export default withApollo(CheckoutPage);
