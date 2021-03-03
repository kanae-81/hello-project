import React from "react";
import styled from 'styled-components';
import Btn from "../../Atoms/Btn";
import Search from "../../Atoms/Search";
import {Props} from './index'

const Form = styled.form`
    width: 100%;
    display:flex;
    align-items: center;
`

const SearchBtn = styled(Btn)`
    margin-left: 20px;
    display: block;
`

const Presentation = ({id, handleChange, handleClick}: Props): JSX.Element => {
    return (
      <>
        <div>
          <h3>名前で探す</h3>
          <Form>
            <Search id={id} handleChange={handleChange} />
            <SearchBtn handleClick={handleClick} text="検索" />
          </Form>
        </div>
      </>
    );
};

export default Presentation;
