import React, { useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Button from 'components/Button/Button';
import {
  ProductDetailsWrapper,
  ProductPreview,
  ProductInfo,
  ProductTitlePriceWrapper,
  ProductTitle,
  BackButton,
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
  RelatedItems,
} from './ProductDetails.style';
import { LongArrowLeft, CartIcon } from 'components/AllSvgIcon';
import ReadMore from 'components/Truncate/Truncate';
import CarouselWithCustomDots from 'components/MultiCarousel/MultiCarousel';
import Products from 'containers/Products/Products';
import { CURRENCY } from 'helper/constant';
import { Product } from 'interfaces';
import { FormattedMessage } from 'react-intl';
import { useLocale } from 'contexts/language/language.provider';
import { useCart } from 'contexts/cart/use-cart';
import { Counter } from 'components/Counter/Counter';

type ProductDetailsProps = {
  product: Product | any;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const ProductDetails: React.FunctionComponent<ProductDetailsProps> = ({
  product,
  deviceType,
}) => {
  const { isRtl } = useLocale();
  const { addItem, removeItem, isInCart, getItem, items } = useCart();
  const data = product;

  const handleAddClick = (e) => {
    e.stopPropagation();
    addItem(data);
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeItem(data);
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);
  const galleryImgs = product.images
  // console.log(product.category)
  return (
    <>
      <ProductDetailsWrapper className='product-card' dir='ltr'>
        {!isRtl && (
          <ProductPreview>
            <BackButton>
              <Button
                title='Back'
                intlButtonId='backBtn'
                iconPosition='left'
                size='small'
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #f1f1f1',
                  color: '#77798c',
                }}
                icon={<LongArrowLeft />}
                onClick={()=>Router.push('/')}
              />
            </BackButton>

            <CarouselWithCustomDots
              items={galleryImgs}
              deviceType={deviceType}
            />
          </ProductPreview>
        )}

        <ProductInfo dir={isRtl ? 'rtl' : 'ltr'}>
          <ProductTitlePriceWrapper>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPriceWrapper>
              {product.discountPercent ? (
                <SalePrice>
                  {CURRENCY}
                  {product.price}
                </SalePrice>
              ) : (
                ''
              )}

              <ProductPrice>
                {CURRENCY}
                {product.salePrice ? product.salePrice : product.price}
              </ProductPrice>
            </ProductPriceWrapper>
          </ProductTitlePriceWrapper>

          <ProductWeight>{product.unit}</ProductWeight>
          <ProductDescription>
            <ReadMore character={600}>{product.description}</ReadMore>
          </ProductDescription>

          <ProductCartWrapper>
            <ProductCartBtn>
              {!isInCart(data.id) ? (
                <Button
                  title='Add to Cart'
                  intlButtonId='addToCartButton'
                  iconPosition='left'
                  size='small'
                  className='cart-button'
                  icon={<CartIcon />}
                  onClick={handleAddClick}
                />
              ) : (
                <Counter
                  value={getItem(data.id).quantity}
                  onDecrement={handleRemoveClick}
                  onIncrement={handleAddClick}
                />
              )}
            </ProductCartBtn>
          </ProductCartWrapper>

          <ProductMeta>
            <MetaSingle>
            {/* //TODO Complete to category tags */}
              {product.category && (
                <Link
                  href={`/$?category=${product.category.slug}`}
                  key={`link-${product.category.id}`}
                >
                  {
                    <a>
                      <MetaItem>{product.category.title}</MetaItem>
                    </a>
                  }
                </Link>
              )}
              {product.Type?.slug && (
                <Link
                  href={`/?type=${product.Type.slug}`}
                  key={`link-${product.Type.id}`}
                >
                  {
                    <a>
                      <MetaItem>{product.Type.title}</MetaItem>
                    </a>
                  }
                </Link>
              )}
              {/* {product.category
                ? product.categories.map((item: any) => (
                    <Link
                      href={`/${}?category=${
                        item.slug
                      }`}
                      key={`link-${item.id}`}
                    >
                      {
                        <a>
                          <MetaItem>{item.title}</MetaItem>
                        </a>
                      }
                    </Link>
                  ))
                : ''} */}
            </MetaSingle>
          </ProductMeta>
        </ProductInfo>

        {isRtl && (
          <ProductPreview>
            <BackButton>
              <Button
                title='Back'
                intlButtonId='backBtn'
                iconPosition='left'
                size='small'
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #f1f1f1',
                  color: '#77798c',
                }}
                icon={<LongArrowLeft />}
                onClick={Router.back}
              />
            </BackButton>

            <CarouselWithCustomDots
              items={galleryImgs}
              deviceType={deviceType}
            />
          </ProductPreview>
        )}
      </ProductDetailsWrapper>

      <RelatedItems>
        <h2>
          <FormattedMessage
            id='intlReletedItems'
            defaultMessage='Related Items'
          />
        </h2>
        <Products
          type={product.Type.slug}
          deviceType={deviceType}
          loadMore={false}
          fetchLimit={10}
        />
      </RelatedItems>
    </>
  );
};

export default ProductDetails;
