import React from "react";
import "./UserProfileCard.css";
import profile_icon from "../Assets/180920231695005324a1b1bd5b.jpg";

const UserProfileCard = () => {
  return (
    <div className="upc">
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="" />
        <div className="profile-title">Elon Musk</div>
        <div className="profile-description">
          Musk is the founder, chairman, CEO and chief technology officer of
          SpaceX; angel investor, CEO, product architect and former chairman of
          Tesla, Inc.; owner, chairman and CTO of X Corp.; founder of the Boring
          Company and xAI; co-founder of Neuralink and OpenAI; and president of
          the Musk Foundation.
        </div>
      </div>
      <div className="profile-button">
        <a href="mailto:elon@musk.com">Contact Mail</a>
      </div>
    </div>
  );
};

export default UserProfileCard;
