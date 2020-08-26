import React, { useContext, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Waypoint } from 'react-waypoint';
// import SearchBox from 'components/SearchBox/SearchBox';
import { SearchContext } from 'contexts/search/search.context';
import { useStickyDispatch } from 'contexts/app/app.provider';
import { FormattedMessage } from 'react-intl';
import {
  BannerWrapper,
  BannerHeading,
  BannerSubHeading,
  BannerComponent,
} from './Banner.style';
// -----------------

import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { ArrowNext, ArrowPrev } from '../../components/AllSvgIcon';
import { useLocale } from 'contexts/language/language.provider';



type BannerProps = {
  intlTitleId: string;
  intlDescriptionId: string;
  color?: string;
};

const Banner: React.FC<BannerProps> = ({
  intlTitleId,
  intlDescriptionId,
  color,
}) => {
  const { state, dispatch } = useContext(SearchContext);
  const router = useRouter();
  // const { text } = state;

  const { pathname } = router;

  const handleSearchInput = (text: string) => {
    dispatch({
      type: 'UPDATE',
      payload: {
        ...state,
        text,
      },
    });
  };

  function handleClickSearchButton() {
    const { page, ...urlState } = state;

    router.push(
      {
        pathname: pathname,
        query: { ...urlState },
      },
      {
        pathname: pathname === '/' ? `${pathname}grocery` : pathname,
        query: { ...urlState },
      },
      { shallow: true }
    );
  }
  const useDispatch = useStickyDispatch();
  const setSticky = useCallback(() => useDispatch({ type: 'SET_STICKY' }), [
    useDispatch,
  ]);
  const removeSticky = useCallback(
    () => useDispatch({ type: 'REMOVE_STICKY' }),
    [useDispatch]
  );

  const onWaypointPositionChange = ({ currentPosition }) => {
    if (!currentPosition || currentPosition === 'above') {
      setSticky();
    }
  };

  return (
    <BannerWrapper>
      <BannerComponent style={{
        background: color ? color : 'red'
      }}>
        <BannerHeading>
          <FormattedMessage
            id={intlTitleId}
            defaultMessage='Set Your Title Through Language File'
            values={{ minute: 90 }}
          />
        </BannerHeading>
        <BannerSubHeading>
          <FormattedMessage
            id={intlDescriptionId}
            defaultMessage='Set Your Description Through Language File'
          />
        </BannerSubHeading>

        {/* <SearchBox
          style={{
            width: 700,
            boxShadow: '0 21px 36px rgba(0,0,0,0.05)',
            borderRadius: '6px',
            overflow: 'hidden',
          }}
          handleSearch={(value: string) => handleSearchInput(value)}
          value={state.text || ''}
          onClick={handleClickSearchButton}
          className='banner-search'
          pathname={pathname}
        /> */}
        <Waypoint
          onEnter={removeSticky}
          onLeave={setSticky}
          onPositionChange={onWaypointPositionChange}
        />
      </BannerComponent>
    </BannerWrapper>
  );
};



// ---------------------------------------------------------------

const ButtonPrev = styled('button')`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: ${themeGet('colors.primary', '#3da2ff')};
  padding: 0;
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 40px;
  margin-top: -20px;
  z-index: 99;
`;

const ButtonNext = styled('button')`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: ${themeGet('colors.primary', '#3da2ff')};
  padding: 0;
  border-radius: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border: 0;
  outline: 0;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 40px;
  margin-top: -20px;
  z-index: 99;
`;

const ButtonGroupWrapper = styled('div')``;

const PrevButton = ({ onClick, children }: any) => {
  return (
    <ButtonPrev
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="prevButton"
    >
      {children}
    </ButtonPrev>
  );
};
const NextButton = ({ onClick, children }: any) => {
  return (
    <ButtonNext
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="nextButton"
    >
      {children}
    </ButtonNext>
  );
};

const ButtonGroup = ({ next, previous }: any) => {
  const { isRtl }: any = useLocale();

  return (
    <ButtonGroupWrapper>
      {isRtl ? (
        <>
          <NextButton onClick={() => next()} className="rtl">
            <ArrowPrev />
          </NextButton>
          <PrevButton onClick={() => previous()}>
            <ArrowNext />
          </PrevButton>
        </>
      ) : (
        <>
          <PrevButton onClick={() => previous()}>
            <ArrowPrev />
          </PrevButton>
          <NextButton onClick={() => next()}>
            <ArrowNext />
          </NextButton>
        </>
      )}

      {/* if prop isRtl true swap prev and next btn */}
    </ButtonGroupWrapper>
  );
};

type Props = {
  data: any[] | undefined;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  props?: any;
  component?: any;
  autoPlay?: boolean;
  infinite?: boolean;
  isRtl?: boolean;
  customLeftArrow?: React.ReactElement;
  customRightArrow?: React.ReactElement;
  itemClass?: string;
};
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const BannerCarousel = ({
  data,
  deviceType: { mobile, tablet, desktop },
  component,
  autoPlay = false,
  infinite = true,
  customLeftArrow,
  customRightArrow,
  itemClass,
  isRtl,
  ...props
}: Props) =>{
  let deviceType = 'desktop';
  if (mobile) {
    deviceType = 'mobile';
  }
  if (tablet) {
    deviceType = 'tablet';
  }
  return (
    <div style={{padding: '90px 0 0 0'}} dir="ltr">
      <div style={{position:'relative',zIndex: 2, width:"100%", height:"100%"}}>
        <Carousel
          arrows={false}
          responsive={responsive}
          ssr={true}
          showDots={false}
          slidesToSlide={1}
          infinite={infinite}
          containerClass="container-with-dots"
          itemClass={itemClass}
          deviceType={deviceType}
          autoPlay={autoPlay}
          autoPlaySpeed={5000}
          renderButtonGroupOutside={true}
          additionalTransfrom={0}
          customButtonGroup={<ButtonGroup />}
          {...props}
          // use dir ltr when rtl true
          >
          {data.map((item: any, index: number) => {
            if (component) return component(item);
            return (
              <Banner
                intlTitleId='womenClothsTitle'
                intlDescriptionId='womenClothsSubTitle'
                key={item.id}
                color={item.color}
              />
              );
            })}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
