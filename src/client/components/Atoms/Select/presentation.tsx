import React from "react";
import styled from 'styled-components';
import {Props} from './index'

const Box = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid #000;
  border-radius: 4px;

  ::before {
    position: absolute;
    top: 50%;
    right: 5px;
    z-index: 10;
    width: 7px;
    height: 7px;
    content: "";
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: translateY(-60%) rotate(45deg);
  }
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 100%;
    content: "";
    background: #000;
  }
`;


const Select = styled.select`
  min-width: 120px;
  padding: 6px 24px 6px 8px;
  font-size: 14px;
  line-height: 1.2;
  color: #000;
  cursor: pointer;
  appearance: none;
  background: transparent;
  border: none;
  &:focus {
      outline:none;
  }
`;

const Presentation = ({handleChange, id, list, className}:Props): JSX.Element => {
    return (
      <>
        <Box className={className}>
          <Select name="" id={id} onChange={(e) => handleChange(e)}>
            <option value=""></option>
            {list.map((value, index) => {
              return (
                <option key={index} value={value}>
                  {value}
                </option>
              );
            })}
          </Select>
        </Box>
      </>
    );
};

export default Presentation;
