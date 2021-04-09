import React, { useState, useEffect } from "react";
import "./Content.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./Firebase";
import firebase from "firebase";

const Content = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Abdirahman Jama",
      description: "Software Engineer",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput(" ");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit"></button>
          </form>
        </div>

        <div className="feed__inputOptions">
          {<InputOptions Icon={ImageIcon} Title="Photo" color="#70B5f9" />}
          {
            <InputOptions
              Icon={SubscriptionIcon}
              Title="Video"
              color="#E7A33E"
            />
          }
          {<InputOptions Icon={EventNoteIcon} Title="Event" color="#C0CbCD" />}
          {
            <InputOptions
              Icon={CalendarViewDayIcon}
              Title="Write"
              color="#7FC15E"
            />
          }
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
};

export default Content;
