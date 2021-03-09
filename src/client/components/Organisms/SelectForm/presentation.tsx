import React from "react";
import styled from "styled-components";
import Btn from "../../Atoms/Btn";
import Select from "../../Atoms/Select";

import {Props} from './index'

const Form = styled.form`
  width: 100%;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

const SelectInner = styled(Select)`
  margin-left: 10px;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const SelectBtn = styled(Btn)`
  margin-top: 10px;
  display: block;
`;

const Presentation = ({
  handleChange,
  handleClick,
  selectList,
}: Props): JSX.Element => {
  return (
    <>
      <div>
        <h3>絞り込んで探す</h3>
        <Form>
          <SelectBox>
            {selectList.map((value) => {
              const { id, name, list } = value;
              return (
                <Label htmlFor="" key={id}>
                  {name}
                  <SelectInner handleChange={handleChange} id={id} list={list} />
                </Label>
              );
            })}
          </SelectBox>
          <SelectBtn handleClick={handleClick} text="絞り込む" />
        </Form>
      </div>
    </>
  );
};

export default Presentation;
