import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React, { useState } from "react";
import { useStateValue } from "../../../provider/StateProvider";
import "./Messagesender.css";
import db from '../../../config/firebase/Firebase'
import firebase from 'firebase'

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{user}, dispatch] = useStateValue()

  const handleSubmit = (e) => {
    e.preventDefault();

    // db input
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.
      serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl
    })

    setInput("")
    setImageUrl("")
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL}/>
        <form>
          <input
            className="messageSender__input"
            placeholder={`what's on your mind, ${user.displayName}?`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input placeholder="image URL (optional)" value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}/>
          <button type="submit" onClick={handleSubmit}>
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__options">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__options">
          <PhotoLibrary style={{ color: "lime" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__options">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Felling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
