import React from "react";
import { Link } from "react-router-dom";

import "./tweet.css";
const Tweet = ({ tweet }) => {
  return (
    <div className="tweetContainer">
      <div className="tweetCard">
        <div className="tweet">
          <h3>{tweet.message}</h3>
          <Link to={`/mentions/${tweet.tags}`}> <p>{tweet.tags}</p></Link>

          <Link to={`/hashtags/${tweet.hashTags}`}> <p>{tweet.hashTags}</p></Link>

         
        </div>
      </div>
    </div>
  );
};

export default Tweet;
