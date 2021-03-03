import React from "react";
import Presentation from './presentation';

export type Props = {
    id: string;
    handleChange: () => void;
}
const Search = ({id, handleChange}:Props): JSX.Element => {

  return (
    <>
        <Presentation id={id} handleChange={handleChange} />
    </>
  );
};

export default Search;
