import React from "react";
import Story from "./story/Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://c.files.bbci.co.uk/13729/production/_112375697_1331db7a-17c0-4401-8cac-6a2309ff49b6.jpg"
        profileSrc="https://www.w3schools.com/howto/img_avatar2.png"
        title="dalo boy"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsc3Wb3Ard3vWP2CVFjRakT0gszvZCkw6NAg&usqp=CAU"
        profileSrc="https://www.w3schools.com/howto/img_avatar2.png"
        title="bob marley"
      />
      <Story
        image="https://wallpapercave.com/wp/dG3RXf3.jpg"
        profileSrc="https://www.w3schools.com/howto/img_avatar2.png"
        title="jimmy hendrix"
      />
      <Story
        image="https://wallpapercave.com/wp/dG3RXf3.jpg"
        profileSrc="https://www.w3schools.com/howto/img_avatar2.png"
        title="jimmy hendrix"
      />
       <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsc3Wb3Ard3vWP2CVFjRakT0gszvZCkw6NAg&usqp=CAU"
        profileSrc="https://www.w3schools.com/howto/img_avatar2.png"
        title="bob marley"
      />
    </div>
  );
};

export default StoryReel;
