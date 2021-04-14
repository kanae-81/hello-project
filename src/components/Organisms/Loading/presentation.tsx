import React from "react";
import styled from "styled-components";
import Spinner from "../../Atoms/Spinner";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const Presentation: React.VFC = () => {
  return (
    <>
      <Overlay>
        <Spinner />
      </Overlay>
    </>
  );
};

export default Presentation;
