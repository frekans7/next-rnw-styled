import Head from "next/head";

import { Normalize } from "styled-normalize";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Normalize />
      <Head>
        <title>NEXT RNW Styled</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="NEXT.js and React Native for Web with styled-components"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
