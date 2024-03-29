import Head from "next/head";
import { useState } from "react";

export default function Home() {

    const [randomPick, setRandomPick]

  return (
    <>
      <Head>
        <title>Emerald Journey</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pokeball.ico" />
      </Head>
      <div className="box">
        <h1>Emerald Journey</h1>
        <button>Let&apos;s begin!</button>
      </div>
    </>
  );
}
