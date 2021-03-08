import React from "react";
import styled from 'styled-components';
import {Props} from './index'

const Title = styled.h2`
    font-size: 20px;
    color: #000;
    margin: 0;
`;

const Presentation = ({text}:Props): JSX.Element => {
    return (
        <>
            <Title>{text}</Title>
        </>
    );
};

export default Presentation;
