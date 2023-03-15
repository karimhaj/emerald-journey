import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [randomPick, setRandomPick] = useState(
    "Clicca qui sotto per iniziare!"
  );
  const [list, setList] = useState([]);

  //const dummyList = ["first", "second", "three", "four", "five"];

  useEffect(() => {
    async function getListData() {
      const response = await axios.get(
        "https://expenses-database-368b0-default-rtdb.europe-west1.firebasedatabase.app//comments.json"
      );
      setList(Object.values(response.data));
    }

    getListData();
  }, []);

  function randomChoice() {
    const randomNumber = Math.random() * list.length;
    let choice;

    for (let i = 0; i < randomNumber; i++) {
      choice = list[i].title;
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
            setRandomPick("rullo di tamburi...");
            setTimeout(() => setRandomPick(choice), 3000);
          }}
        >
          Let&apos;s begin!
        </button>
        <div className="input"></div>
        <input type="text" />
      </div>
    </>
  );
}
