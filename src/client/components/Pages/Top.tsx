import React from "react";
import styled from "styled-components";
import Button from "../Atoms/Bottun";
// import Top from '../Tempalte/Top'
const Div = styled.div`
margin: 30px auto;
text-align: center;
`

const TopPage = (): JSX.Element => {
    return (
        <Div>
            <Button text='トマト' />
        </Div>
    );
};

export default TopPage;
