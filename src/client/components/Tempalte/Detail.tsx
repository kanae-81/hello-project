import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import styled from "styled-components";
import { selectMembers } from "../../modules/selectors";
import Btn from "../Atoms/Btn";
const Main = styled.main`
  margin-top: 20px;
  padding: 0 20px;
`;

const Detail = (): JSX.Element => {
    const history = useHistory();
    const id = useLocation().search.slice(4);
    const members = useSelector(selectMembers);
    const target = members.filter((value: any) => value.id.toString() === id)[0];
    const {
      age,
      birth_day,
      birth_place,
      blog,
      color,
      date_of_guraduation,
      date_of_join,
      group_name,
      kana,
      name,
      nick_name,
    } = target;
    const handleClick = () => {
        history.push('/')
    }
    return (
      <Main>
        <table>
            <tbody>

                <tr>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>{kana}</td>
                </tr>
                <tr>
                    <td>{nick_name}</td>
                </tr>
                <tr>
                    <td>{group_name}</td>
                </tr>
                <tr>
                    <td>{date_of_join}</td>
                </tr>
                <tr>
                    <td>{date_of_guraduation}</td>
                </tr>
                <tr>
                    <td>{birth_day}</td>
                </tr>
                <tr>
                    <td>{birth_place}</td>
                </tr>
                <tr>
                    <td>{age}</td>
                </tr>
                <tr>
                    <td>{blog}</td>
                </tr>
                <tr>
                    <td>{color}</td>
                </tr>
            </tbody>
        </table>
        <div>
            <Btn handleClick={handleClick} text='検索画面に戻る' />
        </div>
      </Main>
    );
};

export default Detail;
