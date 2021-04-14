import React from "react";
import Presentation from "./presentation";

export type Props = {
  handleClick: () => void;
  text: string;
  className?: string;
};

const Btn = ({ handleClick, text, className }: Props): JSX.Element => {
  return (
    <>
      <Presentation
        handleClick={handleClick}
        text={text}
        className={className}
      />
    </>
  );
};

export default Btn;
