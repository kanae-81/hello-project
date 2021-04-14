import React from "react";
import styled from "styled-components";
import { ProgressPlugin } from "webpack";
import Btn from "../../Atoms/Btn";
import Search from "../../Atoms/Search";
import { Props } from "./index";

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SearchBtn = styled(Btn)`
  margin-left: 20px;
  display: block;
`;
const Err = styled.p`
  display: inline-block;
  color: red;
  padding: 0;
  margin: 0;
`;

const Presentation: React.VFC<Props> = ({ ...props }) => {
  const { id, handleChange, handleClick, placeholder, err } = props;
  return (
    <>
      <div>
        <h3>名前で探す</h3>
        <Form>
          <Search
            id={id}
            handleChange={handleChange}
            placeholder={placeholder}
          />
          <SearchBtn handleClick={handleClick} text="検索" />
        </Form>
        {err && <Err>{err}</Err>}
      </div>
    </>
  );
};

export default Presentation;
