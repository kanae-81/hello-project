import React from "react";
import PageTitle from "../Atoms/PageTitle";
import SearchForm from '../Organizms/SearchForm'

const Top = (): JSX.Element => {
    return (
        <>
            <h1>Hello Project</h1>
            <PageTitle text='ハロプロメンバーを探す' />
            <SearchForm />
        </>
    );
};

export default Top;
