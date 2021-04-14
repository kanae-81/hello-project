import React from "react";
import Presentation from './presentation'
import { Member } from "../../../types";

export type Props = {
    list: Member[];
    className?: string;
};

const Members = ({list, className}:Props): JSX.Element => {
    return (
        <Presentation list={list} className={className} />
    );
};

export default Members;
