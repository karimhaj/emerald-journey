import axios from "axios";
import { useState, useEffect } from "react";

const url =
  "https://mybase-72f82-default-rtdb.europe-west1.firebasedatabase.app///commenti.json";

async function getData() {
  try {
    const response = await axios.get(url);
    const dataList = Object.values(response.data);
    return dataList;
  } catch (e) {
    console.log(e);
  }
}

async function postData(comment: string) {
  try {
    if (comment !== "") {
      axios.post(url, { text: comment });
    }
  } catch (e) {
    console.log(e);
  }
}

function VipArea() {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");

  async function refresh() {
    const data = await getData();
    //@ts-ignore
    setCommentList(data);
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
      <div className="vipContainer">
        <div className="vipMain">
          {commentList.map((item: { text: string }, i) => (
            <p key={i} className={"vipMessage"}>
              {item.text}
            </p>
          ))}
        </div>
        <div className="vipHeader">
          <textarea
            rows={4}
            placeholder={"type something..."}
            value={comment}
            onChange={(e) => {
              e.preventDefault();
              setComment(e.target.value);
            }}
            className="vipInput"
          />
          <button
            className="vipButton"
            onClick={() => {
              postData(comment);
              setComment("");
            }}
          >
            Send
          </button>
          <button className="vipButton" onClick={() => refresh()}>
            refresh
          </button>
        </div>
      </div>
    </>
  );
}

export default VipArea;
