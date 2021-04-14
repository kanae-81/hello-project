import React from "react";
import Presentation from "./presentation";

export type Props = {
  text: string;
};

const PageTitle: React.VFC<Props> = ({ ...props }) => {
  return <Presentation {...props} />;
};

export default PageTitle;
