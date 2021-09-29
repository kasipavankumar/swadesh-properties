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
        <link
          href="https://swadesh.co/images/favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        ></link>
        <title>Swadesh Properties (DKPK)</title>
      </Head>

      {/* [START]: Layout */}
      <div className="min-h-screen flex flex-col" data-cy="layout">
        <Component {...pageProps} />
        <div className="mt-24" />
      </div>
      {/* [END]: Layout */}
    </>
  );
}
