import { useEffect } from "react";
import Head from "next/head";
import Language from "@/components/language";

export default function Home() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Halal Delight BE</title>
          <meta name="description" content="Provider of Halal candies and sweets available for purchase online, catering to customers in Europe."/>
          <meta name="og:description" content="Provider of Halal candies and sweets available for purchase online, catering to customers in Europe."/>
          <meta property="og:url" content="https://www.halaldelight.be/"/>
          <meta property="og:title" content="Halal Delight BE"/>
      </Head>

      <div>
        <Language/>
      </div>
    </>
  );
}
