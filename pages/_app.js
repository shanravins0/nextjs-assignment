import { Fragment } from "react";
import Head from "next/head";
import GlobalStyles from "./styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>nextjs-assignment</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
`,
          }}
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
