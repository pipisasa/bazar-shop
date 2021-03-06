import React from 'react';
import Router from 'next/router';
import { closeModal } from '@redq/reuse-modal';
import Button from 'components/Button/Button';
import {
  QuickViewWrapper,
  ProductDetailsWrapper,
  ProductPreview,
  DiscountPercent,
  ProductInfoWrapper,
  ProductInfo,
  ProductTitlePriceWrapper,
  ProductTitle,
  ProductWeight,
  ProductDescription,
  ProductMeta,
  ProductCartWrapper,
  ProductPriceWrapper,
  ProductPrice,
  SalePrice,
  ProductCartBtn,
  MetaSingle,
  MetaItem,
  ModalClose,
} from './QuickView.style';
import { CURRENCY } from 'helper/constant';
import { CloseIcon, CartIcon } from 'components/AllSvgIcon';
import ReadMore from 'components/Truncate/Truncate';
import CarouselWithCustomDots from 'components/MultiCarousel/MultiCarousel';
import { useLocale } from 'contexts/language/language.provider';
import { useCart } from 'contexts/cart/use-cart';
import { Counter } from 'components/Counter/Counter';

type QuickViewProps = {
  modalProps: any;
  deviceType: any;
  onModalClose: any;
};

const QuickView: React.FunctionComponent<QuickViewProps> = ({
  modalProps,
  deviceType,
  onModalClose,
}) => {
  const { addItem, removeItem, isInCart, getItem } = useCart();
  const {
    id,
    Type,
    title,
    unit,
    price,
    discountInPercent,
    salePrice,
    description,
    images,
    image,
    category,
  } = modalProps;

  const galleryImgs = images

  const { isRtl } = useLocale();

  const handleAddClick = (e: any) => {
    e.stopPropagation();
    addItem(modalProps);
  };

  const handleRemoveClick = (e: any) => {
    e.stopPropagation();
    removeItem(modalProps);
  };
  function onCategoryClick(slug:string) {
    Router.push({
      pathname: `/`,
      query: { 
        category: slug, 
        // type: Type.slug 
      },
    }).then(() => window.scrollTo(0, 0));
    closeModal();
  }
  return (
    <>
      <ModalClose onClick={onModalClose}>
        <CloseIcon />
      </ModalClose>
      <QuickViewWrapper>
        <ProductDetailsWrapper className='product-card' dir='ltr'>
          {!isRtl && (
            <ProductPreview>
              <CarouselWithCustomDots items={galleryImgs} deviceType={deviceType} />
              {!!discountInPercent && (
                <>
                  <DiscountPercent>{discountInPercent}%</DiscountPercent>
                </>
              )}
            </ProductPreview>
          )}
          <ProductInfoWrapper dir={isRtl ? 'rtl' : 'ltr'}>
            <ProductInfo>
              <ProductTitlePriceWrapper>
                <ProductTitle>{title}</ProductTitle>
                <ProductPriceWrapper>
                  {discountInPercent ? (
                    <SalePrice>
                      {CURRENCY}
                      {price}
                    </SalePrice>
                  ) : (
                    ''
                  )}

                  <ProductPrice>
                    {CURRENCY}
                    {salePrice ? salePrice : price}
                  </ProductPrice>
                </ProductPriceWrapper>
              </ProductTitlePriceWrapper>

              <ProductWeight>{unit}</ProductWeight>
              <ProductDescription>
                <ReadMore character={600}>{description}</ReadMore>
              </ProductDescription>

              <ProductCartWrapper>
                <ProductCartBtn>
                  {!isInCart(id) ? (
                    <Button
                      title='Cart'
                      intlButtonId='addCartButton'
                      iconPosition='left'
                      colors='primary'
                      size='small'
                      variant='outlined'
                      className='cart-button'
                      icon={<CartIcon />}
                      onClick={handleAddClick}
                    />
                  ) : (
                    <Counter
                      value={getItem(id).quantity}
                      onDecrement={handleRemoveClick}
                      onIncrement={handleAddClick}
                    />
                  )}
                </ProductCartBtn>
              </ProductCartWrapper>

              <ProductMeta>
                <MetaSingle>
                  {/* {category
                    ? category.map((item: any) => (
                        <MetaItem
                          onClick={() => onCategoryClick(item.slug)}
                          key={item.id}
                        >
                          {item.title}
                        </MetaItem>
                      ))
                    : ''} */}
                  
                  {category && (<>
                    <MetaItem
                      onClick={() => onCategoryClick(category.slug)}
                      key={category.id}
                    >
                      {category.title}
                    </MetaItem>
                    {category.parent && (
                      <MetaItem
                        onClick={() => onCategoryClick(category.parent.slug)}
                        key={category.parent.id}
                      >
                        {category.parent.title}
                      </MetaItem>
                    )}
                  </>)}
                </MetaSingle>
              </ProductMeta>
            </ProductInfo>
          </ProductInfoWrapper>

          {isRtl && (
            <ProductPreview>
              <CarouselWithCustomDots items={galleryImgs} deviceType={deviceType} />
              {!!discountInPercent && (
                <>
                  <DiscountPercent>{discountInPercent}%</DiscountPercent>
                </>
              )}
            </ProductPreview>
          )}
        </ProductDetailsWrapper>
      </QuickViewWrapper>
    </>
  );
};

export default QuickView;
