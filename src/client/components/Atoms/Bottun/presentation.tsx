import React from "react";
import styled from 'styled-components';
import {Props} from './index'

const Button = styled.button`
    padding: 10px 15px;
    background: #000;
    color: #fff;
    outline: none;
    cursor: pointer;
    border: none;
    font-size: 16px;
    transition: opacity 0.2s;
    &:hover {
        opacity: 0.7;
    }
`;

const Presentation = ({handleClick, displayText}:Props): JSX.Element => {
    return (
      <>
        <Button type="button" onClick={handleClick}>
          {displayText}
        </Button>
      </>
    );
};

export default Presentation;
