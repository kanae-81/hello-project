import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {searchName, test} from "../../../modules/action";
import Presentation from "./presentation";

export type Props = {
    id: string;
    handleClick: () => void;
    handleChange: () => void;
    placeholder: string;
    err: string;
};

const SearchForm = (): JSX.Element => {
    const dispatch = useDispatch();
    const [err,setError] = useState("");
    const isHiragana = (str:string) => {
        str = str == null ? "" : str;
        if (str.match(/^[ぁ-んー　]*$/)) {
            //"ー"の後ろの文字は全角スペースです。
            return true;
        } else {
            return false;
        }
    }
    const handleClick = () => {
        const target = document.getElementById("name") as HTMLInputElement;
        if(target === null) return;
        if (!target.value.length) return setError("文字を入力してください");
        if (!isHiragana(target.value))return setError("ひらがなで入力してください");
        dispatch(searchName.start(target.value));
        setError("");
    }
    const handleChange = () => {
        dispatch(test('変更'))
    }
    return <Presentation id="name" handleClick={handleClick} handleChange={handleChange} placeholder="ひらがな入力" err={err} />
};

export default SearchForm;
