import React from 'react';
import { NextPage } from 'next';
import { useQuery } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from 'helper/apollo';
import { SEO } from 'components/seo';
import Checkout from 'containers/CheckoutWithSidebar/CheckoutWithSidebar';
import { GET_LOGGED_IN_CUSTOMER } from 'graphql/query/customer.query';

import { ProfileProvider } from 'contexts/profile/profile.provider';
// import Router from 'next/router';
// import { AuthContext } from 'contexts/auth/auth.context';
// import { getLocalState } from 'helper/localStorage';

type Props = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const CheckoutPage: NextPage<Props> = ({ deviceType }) => {
  const initData={
    id: 0,
    email: "",
    firstName: "",
    lastName: "",
    address:[],
    contacts:[],
    cards:[],
  }
  return (
    <>
      <SEO title='Checkout - PickBazar' description='Checkout Details' />
      <ProfileProvider initData={initData}>
        <Modal>
          <Checkout isAnonimus deviceType={deviceType} />
        </Modal>
      </ProfileProvider>
    </>
  );
};

export default withApollo(CheckoutPage);