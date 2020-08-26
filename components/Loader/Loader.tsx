import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Spinner = styled.div`
  ${(props:any) => (`
    width: ${props.size ? props.size : '24px'};
    height: ${props.size ? props.size : '24px'};
  `)};
  /* height: ${(props:any) => (props.height ? props.height : '24px')};
  height: 24px; */
  border: 4px solid #ffffff;
  border-top: 4px solid #3da2ff;
  border-radius: 50%;
  transition-property: transform;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Loader = (color:any) => {
  return <Spinner {...color}/>;
};

export const LoaderWrapper = ()=>(
  <SpinnerWrapper>
    <Spinner size="50px"/>
  </SpinnerWrapper>
)

export default Loader;
