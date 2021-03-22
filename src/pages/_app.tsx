import React from "react";
import { UserProvider } from "../contexts/LoginContexts";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
