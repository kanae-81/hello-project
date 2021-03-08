import React from "react";
import Presentation from './presentation'

export type Props = {
    list: {[key:string]: string}[]
    className?: string;
}

const Members = ({list, className}:Props): JSX.Element => {
    return (
    <>
        <Presentation list={list} className={className} />
    </>
  );
};

export default Members;
