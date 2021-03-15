import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchAllData } from "../../modules/action";
import {
  selectError,
  selectMembers,
  selectLoading,
} from "../../modules/selectors";
import Btn from "../Atoms/Btn";
import ErrorMessage from "../Atoms/ErrorMessage";
import Members from "../Atoms/Members";
import PageTitle from "../Atoms/PageTitle";
import Loading from "../Organisms/Loading";
import SearchForm from '../Organisms/SearchForm'
import SelectForm from "../Organisms/SelectForm";

const Main = styled.main`
  margin-top: 20px;
  padding: 0 20px;
`;

const List = styled(Members)`
    margin-top:40px;
`;

const AllBtn = styled(Btn)`
    margin-top: 36px;
`

const Top = (): JSX.Element => {
    const dispatch = useDispatch();
    const error = useSelector(selectError)
    const members = useSelector(selectMembers)
    const isLoading = useSelector(selectLoading)
    const handleClick = () => {
        dispatch(fetchAllData.start())
    }
    return (
      <Main>
        {isLoading && <Loading />}
        <h1>Hello Project</h1>
        <PageTitle text="ハロプロメンバーを探す" />
        <SearchForm />
        <SelectForm />
        <AllBtn handleClick={handleClick} text="全メンバーを表示する" />
        {error && <ErrorMessage error={error} />}
        {!!members.length && <List list={members} />}
      </Main>
    );
};

export default Top;
