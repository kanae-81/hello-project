import React from "react";
import PageTitle from "../Atoms/PageTitle";
import SearchForm from '../Organisms/SearchForm'
import SelectForm from "../Organisms/SelectForm";

const Top = (): JSX.Element => {
    return (
        <>
            <h1>Hello Project</h1>
            <PageTitle text='ハロプロメンバーを探す' />
            <SearchForm />
            <SelectForm />
        </>
    );
};

export default Top;
