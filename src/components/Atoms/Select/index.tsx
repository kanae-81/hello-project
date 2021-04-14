import React from "react";
import Presentation from "./presentation";

export type Props = {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  list: string[];
  className?: string;
};

const Select: React.VFC<Props> = ({ ...props }) => {
  return <Presentation {...props} />;
};

export default Select;
