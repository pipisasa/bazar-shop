import React from 'react';
import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from 'helper/apollo';
import { SEO } from 'components/seo';
import StoreNav from 'components/StoreNav/StoreNav';
import Carousel from 'components/Carousel/Carousel';
import Banner, { BannerCarousel } from 'containers/Banner/Banner';
import Sidebar from 'containers/Sidebar/Sidebar';
import Products from 'containers/Products/Products';
import CartPopUp from 'containers/Cart/CartPopUp';
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  MobileCarouselDropdown,
} from 'styled/pages.style';
// Static Data Import Here
import OFFERS from 'data/offers';
import ClothsBannerImg from 'image/Cloths.png';
import BagsBannerImg from 'image/Bags.png';
import FurnitureBannerImg from 'image/furniture.png';
import storeType from 'constants/storeType';

const PAGE_TYPE = 'clothing';

function WomenClothsPage({ deviceType }) {
  const { query } = useRouter();
  const targetRef = React.useRef(null);
  React.useEffect(() => {
    if ((query.text || query.category) && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop - 110,
        behavior: 'smooth',
      });
    }
  }, [query]);

  return (
    <>
      <SEO title='Clothing - PickBazar' description='Clothing Details' />
      <Modal>
        <BannerCarousel 
          autoPlay
          deviceType={deviceType} 
          data={[
            {
              id: '1',
              imgSrc: ClothsBannerImg,
              alt: 'Offer 1',
            },
            {
              id: '2',
              imgSrc: BagsBannerImg,
              alt: 'Offer 2',
            },
            {
              id: '3',
              imgSrc: FurnitureBannerImg,
              alt: 'Offer 3',
            }]}
          />
        {/* <Banner
          intlTitleId='womenClothsTitle'
          intlDescriptionId='womenClothsSubTitle'
          imageUrl={ClothsBannerImg}
        /> */}

        {deviceType.desktop ? (
          <>
            <MobileCarouselDropdown>
              <StoreNav items={storeType} />
              <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            </MobileCarouselDropdown>
            <OfferSection>
              <div style={{ margin: '0 -10px' }}>
                <Carousel deviceType={deviceType} data={OFFERS} />
              </div>
            </OfferSection>
            <MainContentArea>
              <SidebarSection>
                <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
              </SidebarSection>
              <ContentSection>
                <div ref={targetRef}>
                  <Products
                    type={PAGE_TYPE}
                    deviceType={deviceType}
                    fetchLimit={16}
                  />
                </div>
              </ContentSection>
            </MainContentArea>
          </>
        ) : (
          <MainContentArea>
            <StoreNav items={storeType} />
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            <OfferSection>
              <div style={{ margin: '0 -10px' }}>
                <Carousel deviceType={deviceType} data={OFFERS} />
              </div>
            </OfferSection>
            <ContentSection style={{ width: '100%' }}>
              <Products
                type={PAGE_TYPE}
                deviceType={deviceType}
                fetchLimit={16}
              />
            </ContentSection>
          </MainContentArea>
        )}
        <CartPopUp deviceType={deviceType} />
      </Modal>
    </>
  );
}

export default withApollo(WomenClothsPage);
