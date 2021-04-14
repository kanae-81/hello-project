import React from "react";
import Presentation from "./presentation";

export type Props = {
  error: string;
  className?: string;
};

const ErrorMessage: React.VFC<Props> = ({ ...props }) => {
  return <Presentation {...props} />;
};

export default ErrorMessage;
