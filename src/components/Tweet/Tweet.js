import React from "react";
import { Link } from "react-router-dom";

import "./tweet.css";
const Tweet = ({ tweet }) => {
  return (
    <div className="tweetContainer">
      <div className="tweetCard">
        <div className="tweet">
          <h3>{tweet.message}</h3>
          <Link style={{ textDecoration: 'none' }} to={`/mentions/${tweet.tags}`}> <p className="tweetText">{tweet.tags}</p></Link>

          <Link style={{ textDecoration: 'none' }} to={`/hashtags/${tweet.hashTags}`}> <p className="tweetText">{tweet.hashTags}</p></Link>

         
        </div>
      </div>
    </div>
  );
};

export default Tweet;
