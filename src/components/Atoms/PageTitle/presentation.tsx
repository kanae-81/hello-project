import React from "react";
import styled from "styled-components";
import { Props } from "./index";

const Title = styled.h2`
  font-size: 24px;
  color: #000;
  margin: 0;
`;

const Presentation: React.VFC<Props> = ({ ...props }) => {
  const { text } = props;
  return (
    <>
      <Title>{text}</Title>
    </>
  );
};

export default Presentation;
