import React from "react";
import styled from "styled-components";
import { Props } from "./index";

const Box = styled.div`
  padding: 20px 0;
`;

const Text = styled.p`
  padding: 10px;
  border: red solid 1px;
  color: red;
  font-size: 17px;
  margin: 0;
`;

const Presentation = ({ error }: Props): JSX.Element => {
  return (
    <>
      <Box>
        <Text>{error}</Text>
      </Box>
    </>
  );
};

export default Presentation;
