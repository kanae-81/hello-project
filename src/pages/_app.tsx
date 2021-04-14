import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Provider } from "react-redux";

import configureStore from "../store/configureStore";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={configureStore}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
