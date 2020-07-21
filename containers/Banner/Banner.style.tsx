import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BannerWrapper = styled.div`
  width: 100%;
  // min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-size: 100%;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-color: #fff;
  background-size: cover;
  padding: 30px 10px 0 10px;

  // @media (max-width: 1400px) {
  //   min-height: 100vh;
  // }

  // @media (max-width: 1200px) {
  //   min-height: 70vh;
  // }

  // @media (max-width: 1050px) {
  //   min-height: 50vh;
  // }

  @media (max-width: 990px) {
    // min-height: 260px;
    /* padding-top: 50px; */
  }

  @media (max-width: 767px) {
    // min-height: 160px;
    /* padding-top: 45px; */
  }
`;

const BannerComponent = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 60px 0;

  @media (max-width: 990px) {
    padding: 60px 70px;
    .banner-search {
      display: none;
    }
  }
`;

// color: ${themeGet('colors.darkBold', '#0D1136')};
const BannerHeading = styled('h1')`
  font-family: ${themeGet('fontFamily.1', 'sans-serif')};
  font-size: ${themeGet('fontSizes.6', '45')}px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #FFF;
  text-align: center;

  @media (max-width: 1400px) {
    font-size: ${themeGet('fontSizes.6', '45')}px;
  }
  @media (max-width: 990px) {
    font-size: ${themeGet('fontSizes.5', '30')}px;
  }
  @media (max-width: 767px) {
    font-size: 17px;
  }
`;

// color: ${themeGet('colors.darkRegular', '#77798C')};
const BannerSubHeading = styled('span')`
  font-family: ${themeGet('fontFamily.0', 'sans-serif')};
  font-size: ${themeGet('fontSizes.3', '19')}px;
  font-weight: 400;
  // margin-bottom: 60px;
  margin: 0 0 10px 0;
  color: #FFF;
  text-align: center;

  @media (max-width: 1400px) {
    font-size: ${themeGet('fontSizes.2', '15')}px;
  }
  @media (max-width: 990px) {
    /* display: none; */
  }
`;

export { BannerWrapper, BannerHeading, BannerSubHeading, BannerComponent };
