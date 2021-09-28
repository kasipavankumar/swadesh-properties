import Head from "next/head";
import "tailwindcss/tailwind.css";

export default function SwadeshProperties({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.bandwidth.workers.dev/thicccboi"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
