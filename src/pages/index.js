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
          <meta name="description" content="Aanbieder van Halal snoep en zoetigheden, beschikbaar voor online aankoop, gericht op klanten in Europa. - Fournisseur de bonbons Halal et de sucreries disponibles à l'achat en ligne, desservant une clientèle en Europe."/>
          <meta name="og:description" content="Aanbieder van Halal snoep en zoetigheden, beschikbaar voor online aankoop, gericht op klanten in Europa. - Fournisseur de bonbons Halal et de sucreries disponibles à l'achat en ligne, desservant une clientèle en Europe."/>
          <meta property="og:url" content="https://www.halaldelight.be/"/>
          <meta property="og:title" content="Halal Delight BE"/>
      </Head>

      <div>
        <Language/>
      </div>
    </>
  );
}
