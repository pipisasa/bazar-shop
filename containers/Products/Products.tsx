import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { openModal, closeModal } from '@redq/reuse-modal';
import ProductCard from 'components/ProductCard/ProductCard';
import {
  ProductsRow,
  ProductsCol,
  ButtonWrapper,
  LoaderWrapper,
  LoaderItem,
  ProductCardWrapper,
} from './Products.style';
import { CURRENCY } from 'helper/constant';
import { useQuery } from '@apollo/react-hooks';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Placeholder from 'components/Placeholder/Placeholder';
import Fade from 'react-reveal/Fade';
import NoResultFound from 'components/NoResult/NoResult';
import Router from 'next/router';
import { GET_PRODUCTS } from 'graphql/query/product.query';
import { AuthContext } from 'contexts/auth/auth.context';
// import { getLocalState } from 'helper/localStorage';
// import fakeDB from '../../helper/fakeDB';

const QuickView = dynamic(() => import('../QuickView/QuickView'));

type ProductsProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  type?: string;
  fetchLimit?: number;
  loadMore?: boolean;
};
export const Products: React.FC<ProductsProps> = (props) => {
  const {
    deviceType,
    type,
    fetchLimit = 8,
    loadMore = true,
  } = props;
  // console.log(type, "Hello")
  const router = useRouter(); 
  const [loadingMore, toggleLoading] = useState(false);
  let { data, error, loading, fetchMore } = useQuery(GET_PRODUCTS, {
    variables:{
      type: router.query.type,
      offset: 0,
      limit: fetchLimit,
      text:router.query.text,
      category:router.query.category
    },
  });
  // console.log(data)
  // Quick View Modal
  const handleModalClose = () => {
    const as = router.asPath;
    router.push(as, as, { shallow: true });
    closeModal();
  };

  const handleQuickViewModal = (
    modalProps: any,
    deviceType: any,
    onModalClose: any
  ) => {
    if (router.pathname === '/product/[slug]') {
      const as = `/product/${modalProps.slug}`;
      router.push(router.pathname, as);
      return;
    }
    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: false,
      component: QuickView,
      componentProps: { modalProps, deviceType, onModalClose },
      closeComponent: 'div',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 900,
        y: 30,
        height: 'auto',
        transition: {
          mass: 1,
          tension: 0,
          friction: 0,
        },
      },
    });
    const href = router.asPath;
    const as = `/product/${modalProps.slug}`;
    router.push(href, as, { shallow: true });
  };

  if (loading) {
    return (
      <LoaderWrapper>
        <LoaderItem>
          <Placeholder />
        </LoaderItem>
        <LoaderItem>
          <Placeholder />
        </LoaderItem>
        <LoaderItem>
          <Placeholder />
        </LoaderItem>
      </LoaderWrapper>
    );
  }

  
  const {authDispatch} = useContext<any>(AuthContext)
  if(error) {
    if(error.message === "Network error: Failed to fetch"){
      return <div>"Network error!!!"</div>
    }
    if(error.message === "GraphQL error: Error decoding signature"){
      Router.push('/logout');
    }
    // console.log(error.message)
    return null;
    // authDispatch({type:'SIGN_OUT'});
    // return "Error"
    // alert('Error' + error)
  }
  if (!data || !data.products || data.products.items.length === 0) {
    return <NoResultFound />;
  }
  const handleLoadMore = () => {
    toggleLoading(true);
    fetchMore({
      variables: {
        offset: Number(data.products.items.length),
        limit: fetchLimit,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        toggleLoading(false);
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          products: {
            __typename: prev.products.__typename,
            items: [...prev.products.items, ...fetchMoreResult.products.items],
            hasMore: fetchMoreResult.products.hasMore,
          },
        };
      },
    });
  };

  return (
    <>
      <ProductsRow>
        {data.products.items.map((item: any, index: number) => (
          <ProductsCol key={index}>
            {/* {console.log(item.images)} */}
            {(()=>{item.discountInPercent = item.discountPercent})()}
            <ProductCardWrapper>
              <Fade
                duration={800}
                delay={index * 10}
                style={{ height: '100%' }}
              >
                <ProductCard
                  title={item.title}
                  description={item.description}
                  image={item.images[0]?.image}
                  weight={item.unit}
                  currency={CURRENCY}
                  price={item.price}
                  salePrice={item.salePrice}
                  discountInPercent={item.discountPercent}
                  data={item}
                  deviceType={deviceType}
                  link={'/product/'+ item.slug}
                  onClick={() =>
                    handleQuickViewModal(item, deviceType, handleModalClose)
                  }
                />
              </Fade>
            </ProductCardWrapper>
          </ProductsCol>
        ))}
      </ProductsRow>
      {loadMore && data.hasMore && (
        <ButtonWrapper>
          <Button
            onClick={handleLoadMore}
            title="Load More"
            intlButtonId="loadMoreBtn"
            size="small"
            isLoading={loadingMore}
            loader={<Loader color="#009E7F" />}
            style={{
              minWidth: 135,
              backgroundColor: '#ffffff',
              border: '1px solid #f1f1f1',
              color: '#009E7F',
            }}
          />
        </ButtonWrapper>
      )}
    </>
  );
};
export default (Products);
