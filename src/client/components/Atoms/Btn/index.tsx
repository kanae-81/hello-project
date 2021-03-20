import React from "react";
import Presentation from './presentation'

export type Props = {
    handleClick: () => void;
    text: string;
    className?: string;
}

const Btn = ({...props}:Props): JSX.Element => {
    const {handleClick, text, className} = props;
    return (
    <>
        <Presentation handleClick={handleClick} text={text} className={className} />
    </>
  );
};

export default Btn;
