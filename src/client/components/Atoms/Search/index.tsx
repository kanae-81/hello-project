import React from "react";
import Presentation from './presentation';

export type Props = {
  id: string;
  handleChange: () => void;
  placeholder?: string;
};
const Search = ({ id, handleChange, placeholder }: Props): JSX.Element => {
  return (
    <>
      <Presentation id={id} handleChange={handleChange} placeholder={placeholder} />
    </>
  );
};

export default Search;
