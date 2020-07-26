import React, { useContext, useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
import { GET_LOGGED_IN_CUSTOMER } from 'graphql/query/customer.query';
import { ProfileProvider } from 'contexts/profile/profile.provider';
import SettingsContent from 'containers/Profile/Settings/Settings';
import {
  PageWrapper,
  SidebarSection,
  ContentBox,
} from 'containers/Profile/Profile.style';
import Sidebar from 'containers/Profile/Sidebar/Sidebar';
import { SEO } from 'components/seo';
import SiteFooter from 'components/SiteFooter/SiteFooter';
import { FormattedMessage } from 'react-intl';
import { withApollo } from 'helper/apollo';
import { AuthContext } from 'contexts/auth/auth.context';
import { useRouter } from 'next/router';

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const me = {
  id: 1,
  firstName: "Jhon Doe",
  lastName: "Smith",
  email: "jhondDoe@demo.com",
  address: [
    {
      id: "12312",
      Type: "secondary",
      name: "Home",
      info: "27 Street, 2569 Heritage Road Visalia, CA 93291"
    },
    {
      id: "23423",
      Type: "primary",
      name: "Office",
      info: "33 Baker Street, Crescent Road, CA 65746"
    }
  ],
  contacts: [
    {
      id: "88234",
      Type: "primary",
      number: "202-555-0191"
    },
    {
      id: "23439",
      Type: "secondary",
      number: "202-555-0701"
    }
  ],
  cards: [
    {
      id: "179012",
      Type: "primary",
      cardType: "paypal",
      firstName: "Jhon Doe",
      lastName: "Smith",
      lastFourDigit: 2349
    },
    {
      id: "987234",
      Type: "secondary",
      cardType: "master",
      firstName: "Jhon Doe",
      lastName: "Smith",
      lastFourDigit: 8724
    },
    {
      id: "424987",
      Type: "secondary",
      cardType: "visa",
      firstName: "Jhon Doe",
      lastName: "Smith",
      lastFourDigit: 4535
    },
    {
      id: "455599",
      Type: "secondary",
      cardType: "visa",
      firstName: "Jhon Doe",
      lastName: "Smith",
      lastFourDigit: 4585
    }
  ]
}
const ProfilePage: NextPage<Props> = ({ deviceType }) => {
  const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
  const [logout, setLogout] = useState(false);
  const router = useRouter();
  React.useEffect(() => {
    if(error){
      router.push('/logout');
    }
  },[error]);
  // const { data, error, loading } = {data:{me}, error:null, loading: false}
  if (error){
    // setLogout(true);
    return <div style={{padding:"100px 0 0 0"}}>{error.message}</div>;
  } 
  if (!data || loading) {
    return <div style={{padding:"100px 0 0 0"}}>loading...</div>;
  }
  return (
    <>
      <SEO title='Profile - PickBazar' description='Profile Details' />
      <ProfileProvider initData={data.me}>
        <Modal>
          <PageWrapper>
            <SidebarSection>
              <Sidebar />
            </SidebarSection>
            <ContentBox>
              <SettingsContent deviceType={deviceType} />
            </ContentBox>

            <SiteFooter style={{ marginTop: 50 }}>
              <FormattedMessage
                id='siteFooter'
                defaultMessage='Pickbazar is a product of'
              />
              &nbsp; <Link href='#'> Redq, Inc.</Link>
            </SiteFooter>
          </PageWrapper>
        </Modal>
      </ProfileProvider>
    </>
  );
};

export default withApollo(ProfilePage);