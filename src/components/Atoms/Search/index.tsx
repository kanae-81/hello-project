import React from "react";
import Presentation from "./presentation";

export type Props = {
  id: string;
  handleChange: () => void;
  placeholder?: string;
};

const Search: React.VFC<Props> = ({ ...props }) => {
  return <Presentation {...props} />;
};

export default Search;
