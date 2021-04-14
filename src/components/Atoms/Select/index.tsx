import React from "react";
import Presentation from "./presentation";

export type Props = {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  list: string[];
  className?: string;
};

const Select = ({ handleChange, id, list, className }: Props): JSX.Element => {
  return (
    <Presentation
      handleChange={handleChange}
      list={list}
      id={id}
      className={className}
    />
  );
};

export default Select;
