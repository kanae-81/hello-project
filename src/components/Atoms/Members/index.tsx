import React from "react";
import Presentation from "./presentation";
import { Member } from "../../../types";

export type Props = {
  list: Member[];
  className?: string;
};

const Members: React.VFC<Props> = ({ ...props }) => {
  return <Presentation {...props} />;
};

export default Members;
