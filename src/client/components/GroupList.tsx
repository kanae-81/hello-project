import React from "react";
import { useDispatch } from "react-redux";
import {test} from "../modules/action"

const GroupList = (): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <>
      <div>モーニング娘。</div>
      <button  onClick={() => {dispatch(test('test'))}}>テスト</button>
    </>
  );
};

export default GroupList;
