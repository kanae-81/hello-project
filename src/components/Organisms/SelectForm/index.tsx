import React from "react";
import { useDispatch } from "react-redux";
import { searchDetails, setSelectData, test } from "../../../modules/action";
import Presentation from "./presentation";

type SelectList = {
  id: string;
  name: string;
  list: string[];
}[];

export type Props = {
  handleClick: () => void;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectList: SelectList;
};

const SearchForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(test("クリック"));
    dispatch(searchDetails.start());
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.id;
    const value = e.target.value;
    if (!id.length) return;
    dispatch(setSelectData({ id, value }));
  };
  const colorList = [
    "アクアブルー",
    "イエロー",
    "イタリアンレッド",
    "エメラルドグリーン",
    "オレンジ",
    "グリーン",
    "ゴールドイエロー",
    "シーブルー",
    "スカイブルー",
    "ターコイズ",
    "ディープピンク",
    "デイジー",
    "デイジーイエロー",
    "パープル",
    "ハニー",
    "ピーチ",
    "ピュアレッド",
    "ピンク",
    "ブドウ",
    "ブライトグリーン",
    "ブルー",
    "ホットピンク",
    "マスタード",
    "ミディアムブルー",
    "ミントグリーン",
    "メロン",
    "ライトオレンジ",
    "ライトグリーン",
    "ライトパープル",
    "ライトピンク",
    "ライトブルー",
    "ライトレッド",
    "ライム",
    "ラベンダー",
    "りんご",
    "レモン",
    "レッド",
    "ロイヤルブルー",
    "黄",
    "黄緑",
    "紺",
    "紫",
    "深緑",
    "青",
    "赤",
    "白",
    "緑",
  ];
  const groupList = [
    "モーニング娘。",
    "℃-ute",
    "Berryz工房",
    "アンジュルム",
    "Juice=Juice",
    "こぶしファクトリー",
    "つばきファクトリー",
    "カントリー・ガールズ",
    "BEYOOOOONDS",
  ];
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
    <Presentation
      handleClick={handleClick}
      handleChange={handleChange}
      selectList={selectList}
    />
  );
};

export default SearchForm;
