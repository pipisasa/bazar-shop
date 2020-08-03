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
// import { AuthContext } from 'contexts/auth/auth.context';
import { getLocalState } from 'helper/localStorage';
import { LoaderWrapper } from 'components/Loader/Loader';

type Props = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const CheckoutPage: NextPage<Props> = ({ deviceType }) => {
  // const {
  //   authState: { isAuthenticated }
  // } = React.useContext<any>(AuthContext);
  const { data, error, loading, fetchMore } = useQuery(GET_LOGGED_IN_CUSTOMER);
  // console.log(data, error, "checkout")
  if (loading) {
    return <LoaderWrapper/>;
  }
  if(error) {
    if(!getLocalState("access_token")){
      Router.push('/checkout-anonimus');
      return null;
    }
    Router.push('/logout');
    return null;
  }

  if (error) return <div style={{margin:"150px 0 0 0"}}>{error.message}</div>;

  return (
    <>
      <SEO title='Checkout - PickBazar' description='Checkout Details' />
      <ProfileProvider initData={data.me}>
        <Modal>
          <Checkout deviceType={deviceType} />
        </Modal>
      </ProfileProvider>
    </>
  );
};

export default withApollo(CheckoutPage);
