import React from "react";
import styled from "styled-components";
import { Props } from "./index";

const Input = styled.input`
  width: 200px;
  font-size: 18px;
  line-height: calc(28 / 18);
  border: solid 1px #000;
  &:focus {
    outline: solid auto #0099cc;
  }
`;

const Presentation = ({
  id,
  handleChange,
  placeholder,
}: Props): JSX.Element => {
  return (
    <>
      <Input
        id={id}
        onChange={handleChange}
        type="text"
        placeholder={placeholder}
      />
    </>
  );
};

export default Presentation;
