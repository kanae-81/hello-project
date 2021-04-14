import React from "react";
import styled from "styled-components";
import Btn from "../../Atoms/Btn";
import Select from "../../Atoms/Select";

import { Props } from "./index";

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-end;
`;
const Label = styled.label`
  text-align: center;
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

const SelectInner = styled(Select)`
  margin-top: 4px;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const SelectBtn = styled(Btn)`
  margin-left: 20px;
  display: block;
`;

const Presentation: React.VFC<Props> = ({ ...props }) => {
  const { handleChange, handleClick, selectList } = props;
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
                  <SelectInner
                    handleChange={handleChange}
                    id={id}
                    list={list}
                  />
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
