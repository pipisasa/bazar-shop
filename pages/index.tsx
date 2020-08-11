import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { withApollo } from 'helper/apollo';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from 'graphql/query/customer.query';
// the redirect will only happen on the client-side. This is by design,
const Index: React.FC = () => {
  // const router = useRouter();
  // useQuery(GET_ME);
  React.useEffect(() => {
    Router.push('/products');
  });
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default withApollo(Index);
