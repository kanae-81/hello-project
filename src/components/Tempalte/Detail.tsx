import React from "react";
import { useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import styled from "styled-components";
import { selectMembers } from "../../modules/selectors";
import Btn from "../Atoms/Btn";
import { Member } from "../../types";

const Main = styled.main`
  margin-top: 20px;
  padding: 0 20px;
`;

const Table = styled.table`
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px;
  background-color: lightgray;
  border: 1px solid gray;
`;

const Td = styled.td`
  padding: 0 10px;
  border: 1px solid gray;
`;

const Box = styled.div`
  margin-top: 20px;
`;

const Detail: React.VFC = () => {
  const router = useRouter();
  const id = router.query.id;
  const members = useSelector(selectMembers);
  const target = members.filter(
    (value: Member) => value.id.toString() === id
  )[0];
  const {
    age,
    birth_day,
    birth_place,
    blog,
    color,
    date_of_graduation,
    date_of_join,
    group_name,
    kana,
    name,
    nick_name,
  } = target;
  const handleClick = () => {
    Router.push("/");
  };
  return (
    <Main>
      <Table>
        <tbody>
          <tr>
            <Th>名前</Th>
            <Td>
              <ruby>
                <rb>{name}</rb>
                <rp>(</rp>
                <rt>{kana}</rt>
                <rp>)</rp>
              </ruby>
            </Td>
          </tr>
          <tr>
            <Th>ニックネーム</Th>
            <Td>{nick_name}</Td>
          </tr>
          <tr>
            <Th>年齢</Th>
            <Td>{age}歳</Td>
          </tr>
          <tr>
            <Th>所属グループ</Th>
            <Td>{group_name}</Td>
          </tr>
          <tr>
            <Th>メンバーカラー</Th>
            <Td>{color}</Td>
          </tr>
          <tr>
            <Th>誕生日</Th>
            <Td>{birth_day}</Td>
          </tr>
          <tr>
            <Th>出身地</Th>
            <Td>{birth_place}</Td>
          </tr>
          <tr>
            <Th>加入日</Th>
            <Td>{date_of_join}</Td>
          </tr>
          <tr>
            <Th>卒業日</Th>
            <Td>{date_of_graduation}</Td>
          </tr>
          <tr>
            <Th>ブログ</Th>
            <Td>
              <a href={blog} target="_blank">
                {blog}
              </a>
            </Td>
          </tr>
        </tbody>
      </Table>
      <Box>
        <Btn handleClick={handleClick} text="検索画面に戻る" />
      </Box>
    </Main>
  );
};

export default Detail;
