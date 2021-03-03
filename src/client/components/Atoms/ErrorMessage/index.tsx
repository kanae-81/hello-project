import React from "react";
import Presentation from './presentation'

export type Props = {
    error: string;
    className?: string;
}

const ErrorMessage = ({error}: Props): JSX.Element => {
    return (
    <>
        <Presentation error={error} />
    </>
  );
};

export default ErrorMessage;
