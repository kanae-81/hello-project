import React from "react";
import { useDispatch } from "react-redux";
import {searchName, test} from "../../../modules/action";
import Presentation from "./presentation";

export type Props = {
    id: string;
  handleClick: () => void;
  handleChange: () => void;
};

const SearchForm = (): JSX.Element => {
    const dispatch = useDispatch();
    const handleClick = () => {
        const target = document.getElementById("name") as HTMLInputElement;
        if(!target) return;
        dispatch(searchName.start(target.value))
    }
    const handleChange = () => {
        dispatch(test('変更'))
    }
    return <Presentation id="name" handleClick={handleClick} handleChange={handleChange} />
};

export default SearchForm;
