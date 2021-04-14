import React from "react";
import styled, { keyframes } from "styled-components";

const SpinnerAnimation = keyframes`
    0% {
        border-width: calc(60px / 7);
    }
    25% {
        border-width: calc(60px / 23.33);
    }
    50% {
        transform: rotate(115deg);
        border-width: calc(60px / 7);
    }
    75% {
        border-width: calc(60px / 23.33);
    }
    100% {
        border-width: calc(60px / 7);
    }
`;
const SpringSpinner = styled.div`
  height: 60px;
  width: 60px;
`;

const SpringSpinnerPartTop = styled.div`
  overflow: hidden;
  height: calc(60px / 2);
  width: 60px;
`;

const SpringSpinnerPartBottom = styled.div`
  overflow: hidden;
  height: calc(60px / 2);
  width: 60px;
  transform: rotate(180deg) scale(-1, 1);
`;

const SpringSpinnerRotator = styled.div`
  width: 60px;
  height: 60px;
  border: calc(60px / 7) solid transparent;
  border-right-color: gray;
  border-top-color: gray;
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${SpinnerAnimation} 3s ease-in-out infinite;
  transform: rotate(-200deg);
`;

const Presentation = (): JSX.Element => {
  return (
    <>
      <SpringSpinner>
        <SpringSpinnerPartTop>
          <SpringSpinnerRotator />
        </SpringSpinnerPartTop>
        <SpringSpinnerPartBottom>
          <SpringSpinnerRotator />
        </SpringSpinnerPartBottom>
      </SpringSpinner>
    </>
  );
};

export default Presentation;
