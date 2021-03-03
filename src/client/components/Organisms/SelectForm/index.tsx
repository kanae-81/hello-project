import React from "react";
import { useDispatch } from "react-redux";
import {test} from "../../../modules/action";
import Presentation from "./presentation";

export type Props = {
  handleClick: () => void;
  changeMethod: { [key: string]: () => void };
  selectList: {
    id: string;
    name: string;
    list: string[];
  }[];
};

const SearchForm = (): JSX.Element => {
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(test("クリック"));
    };
    const handleChange = () => {
        dispatch(test("変更"));
    };
    const changeMethod: { [key: string]: () => void } = {
      color: handleChange,
    };
    const colorList = ["赤", "青"];
    const groupList = ["モーニング娘。'21", "アンジュルム"];
    const selectList = [
      {
        id: "color",
        name: "イメージカラー",
        list: colorList,
      },
      {
        id: "group",
        name: "所属グループ",
        list: groupList,
      },
    ];
    return (
      <>
        <Presentation
          handleClick={handleClick}
          changeMethod={changeMethod}
          selectList={selectList}
        />
      </>
    );
};

export default SearchForm;
