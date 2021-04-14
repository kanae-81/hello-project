import React from "react";
import Presentation from "./presentation";

export type Props = {
  text: string;
};

const PageTitle = ({ text }: Props): JSX.Element => {
  return <Presentation text={text} />;
};

export default PageTitle;
