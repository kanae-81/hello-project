import React from "react";
import Presentation from './presentation'

export type Props = {
    handleChange: () => void;
    list: string[];
    className?: string;
}

const Select = ({handleChange, list, className}:Props): JSX.Element => {
    return (
    <>
        <Presentation handleChange={handleChange} list={list} className={className} />
    </>
  );
};

export default Select;
