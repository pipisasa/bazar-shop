import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
// import { useQuery } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
// import { GET_LOGGED_IN_CUSTOMER } from 'graphql/query/customer.query';
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

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const me = {
  id: 1,
  name: "Jhon Doe Smith",
  email: "jhondDoe@demo.com",
  address: [
    {
      id: "12312",
      type: "primary",
      name: "Home",
      info: "27 Street, 2569 Heritage Road Visalia, CA 93291"
    },
    {
      id: "23423",
      type: "secondary",
      name: "Office",
      info: "33 Baker Street, Crescent Road, CA 65746"
    }
  ],
  contact: [
    {
      id: "88234",
      type: "primary",
      number: "202-555-0191"
    },
    {
      id: "23439",
      type: "secondary",
      number: "202-555-0701"
    }
  ],
  card: [
    {
      id: "179012",
      type: "primary",
      cardType: "paypal",
      name: "Jhon Doe Smith",
      lastFourDigit: 2349
    },
    {
      id: "987234",
      type: "secondary",
      cardType: "master",
      name: "Jhon Doe Smith",
      lastFourDigit: 8724
    },
    {
      id: "424987",
      type: "secondary",
      cardType: "visa",
      name: "Jhon Doe Smith",
      lastFourDigit: 4535
    },
    {
      id: "455599",
      type: "secondary",
      cardType: "visa",
      name: "Jhon Doe Smith",
      lastFourDigit: 4585
    }
  ]
}
const ProfilePage: NextPage<Props> = ({ deviceType }) => {
  // const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
  const { data, error, loading } = {data:{me}, error:null, loading: false}
  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <div>{error.message}</div>;
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
              &nbsp; <Link href='#'>Redq, Inc.</Link>
            </SiteFooter>
          </PageWrapper>
        </Modal>
      </ProfileProvider>
    </>
  );
};

export default withApollo(ProfilePage);
