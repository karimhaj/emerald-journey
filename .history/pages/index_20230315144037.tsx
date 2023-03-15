import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [randomPick, setRandomPick] = useState(
    "Clicca qui sotto per iniziare!"
  );
  const [list, setList] = useState([])

  const dummyList = ["first", "second", "three", "four", "five"];

  function randomChoice() {
    const randomNumber = Math.random() * list.length;
    let choice;

    for (let i = 0; i < randomNumber; i++) {
      choice = list[i];
      console.log(i);
    }
    return choice;
  }

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
        <div className="random-pick">{randomPick}</div>
        <button
          className="button"
          onClick={() => {
            let choice = randomChoice();
            setRandomPick(choice);
          }}
        >
          Let&apos;s begin!
        </button>
      </div>
    </>
  );
}
