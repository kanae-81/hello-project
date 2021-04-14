import React from "react";
import Presentation from "./presentation";

export type Props = {
  handleClick: () => void;
  text: string;
  className?: string;
};

const Btn: React.VFC<Props> = ({ ...props }) => {
  return (
    <>
      <Presentation {...props} />
    </>
  );
};

export default Btn;
