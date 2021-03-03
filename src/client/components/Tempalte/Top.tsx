import React from "react";
import { useSelector } from "react-redux";
import { selectError } from "../../modules/selectors";
import ErrorMessage from "../Atoms/ErrorMessage";
import PageTitle from "../Atoms/PageTitle";
import SearchForm from '../Organisms/SearchForm'
import SelectForm from "../Organisms/SelectForm";

const Top = (): JSX.Element => {
    const error = useSelector(selectError)
    return (
      <>
        <h1>Hello Project</h1>
        <PageTitle text="ハロプロメンバーを探す" />
        {!error || <ErrorMessage error={error} />}
        <SearchForm />
        <SelectForm />
      </>
    );
};

export default Top;
