import React from "react";
import Presentation from './presentation';

export type Props = {
    handleChange: () => void;
}
const Search = ({handleChange}:Props): JSX.Element => {

  return (
    <>
        <Presentation handleChange={handleChange} />
    </>
  );
};

export default Search;
