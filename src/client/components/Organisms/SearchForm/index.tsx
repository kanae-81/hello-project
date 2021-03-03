import React from "react";
import { useDispatch } from "react-redux";
import {test} from "../../../modules/action";
import Presentation from "./presentation";

export type Props = {
    handleClick: () => void;
    handleChange: () => void;
}

const SearchForm = (): JSX.Element => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(test('test'))
    }
    const handleChange = () => {
        dispatch(test('変更'))
    }
    return <Presentation handleClick={handleClick} handleChange={handleChange} />
};

export default SearchForm;
