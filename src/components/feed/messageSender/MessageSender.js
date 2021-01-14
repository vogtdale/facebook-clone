import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React, { useState } from "react";
import "./Messagesender.css";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // db inpu

    setInput("")
    setImageUrl("")
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            className="messageSender__input"
            placeholder={"what's on your mind?"}
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
