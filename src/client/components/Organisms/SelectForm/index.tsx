import React from "react";
import { useDispatch } from "react-redux";
import {searchDetails, setSelectData, test} from "../../../modules/action";
import Presentation from "./presentation";

export type Props = {
  handleClick: () => void;
  handleChange: (e: any) => void;
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
      dispatch(searchDetails.start())
    };
    const handleChange = (e: any) => {
        const id = e.target.id;
        const value = e.target.value;
        if(!id.length) return;
        dispatch(setSelectData(id, value))
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
          handleChange={handleChange}
          selectList={selectList}
        />
      </>
    );
};

export default SearchForm;
