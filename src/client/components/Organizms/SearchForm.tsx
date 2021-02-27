import React from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import {test} from "../../modules/action";
import Btn from "../Atoms/Btn";
import Search from "../Atoms/Search";

const Form = styled.form`
    width: 100%;
    display:flex;
    align-items: center;
`

const SearchBtn = styled(Btn)`
    margin-left: 20px;
    display: block;
`

const SearchForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const handleClick = () => {
      dispatch(test('test'))
  }
  const handelChange = () => {
      dispatch(test('変更'))
  }
  return (
    <>
      <Form>
        <Search handleChange={handelChange} />
        <SearchBtn handleClick={handleClick} text='検索' />
      </Form>
    </>
  );
};

export default SearchForm;
