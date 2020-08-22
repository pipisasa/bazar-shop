import React from 'react';
import { NextPage } from 'next';
import { SEO } from 'components/seo';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import ProductDetails from 'containers/ProductDetails/ProductDetails';
import { Modal } from '@redq/reuse-modal';
import ProductSingleWrapper, {
  ProductSingleContainer,
} from 'styled/product-single.style';
import CartPopUp from 'containers/Cart/CartPopUp';
import { withApollo } from 'helper/apollo';
import { GET_PRODUCT_DETAILS } from 'graphql/query/product.query';
import { LoaderWrapper } from 'components/Loader/Loader';

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const ProductPage: NextPage<Props> = ({ deviceType }) => {
  const {
    query: { slug },
  } = useRouter();

  const { data, error, loading } = useQuery(GET_PRODUCT_DETAILS, {
    variables: { slug },
  });
  // console.log(data)

  if (loading) {
    return <LoaderWrapper/>;
  }

  if (error) return <div style={{padding:"150px 0 0 0"}}>Error: {error.message}</div>;

  return (
    <>
      <SEO
        title={`${data.product.title} - PickBazar`}
        description={`${data.product.title} Details`}
      />

      <Modal>
        <ProductSingleWrapper>
          <ProductSingleContainer>
            <ProductDetails product={data.product} deviceType={deviceType} />
            <CartPopUp deviceType={deviceType} />
          </ProductSingleContainer>
        </ProductSingleWrapper>
      </Modal>
    </>
  );
};
export default withApollo(ProductPage);
