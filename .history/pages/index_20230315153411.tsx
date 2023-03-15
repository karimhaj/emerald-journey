import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [randomPick, setRandomPick] = useState(
    "Clicca qui sotto per iniziare!"
  );
  const [list, setList] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [notify, setNotify] = useState(false);

  //const dummyList = ["first", "second", "three", "four", "five"];

  async function getListData() {
    const response = await axios.get(
      "https://expenses-database-368b0-default-rtdb.europe-west1.firebasedatabase.app//comments.json"
    );
    setList(Object.values(response.data));
  }

  useEffect(() => {
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

  async function handleSubmit() {
    try {
      if (newComment !== "") {
        axios.post(
          "https://expenses-database-368b0-default-rtdb.europe-west1.firebasedatabase.app//comments.json",
          { title: newComment }
        );
      }
    } catch (e) {
      console.log(e);
    }
    setNewComment("");
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
        <div className="top-part">
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
        </div>
        <div className="input-container">
          <textarea
            placeholder="Write a new comment here..."
            className="input"
            rows={6}
            onChange={(e) => {
              e.preventDefault();
              setNewComment(e.target.value);
            }}
            value={newComment}
          />
          <button className="submit-button" onClick={() => handleSubmit()}>
            Submit
          </button>
          {notify && <div>}
        </div>
      </div>
    </>
  );
}
