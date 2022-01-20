import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Dropdown from "react-dropdown";
import { useHistory } from "react-router-dom";

import "react-dropdown/style.css";
import { users } from "../../constants/users";
import "./createTweet.css";
import avatar from "../../images/avatar.png";
import {
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
  FaCalendarCheck,
} from "react-icons/fa";
import { addTweet } from "../../features/Tweet/tweetSlice";
const CreateTweet = () => {
  let history = useHistory();

  const dispatch = useDispatch();
  const alert = useAlert();
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  const [tweet, setTweet] = useState({ message: "", tags: "", hashTags: "" });

  const submitTweet = () => {
    console.log(tweet.hashTags);
    if(tweet.hashTags==''||tweet.message==''||tweet.tags==''){
      alert.error("please add your tweet")
    }
    else{
    dispatch(addTweet(tweet));
    setTweet({ message: '', tags: '', hashTags: '' });


    alert.success("one tweet added");
    history.push("/tweets")
    }

  };

  return (
    <div className="create">
      <div className="create__first">
        <div className="create__img">
          <img src={avatar} alt="profile img" />
        </div>
        <div className="create__input">
          <input
            onChange={(e) => setTweet({ ...tweet, message: e.target.value })}
            value={tweet.message}
            type="text"
            className="create__control"
            placeholder="add your tweet here?"
          />
          <input
            onChange={(e) => setTweet({ ...tweet, tags: e.target.value })}
            value={tweet.tags}
            type="text"
            className="create__control2"
            placeholder="add your  friends to tag"
          />

          <input
            onChange={(e) => setTweet({ ...tweet, hashTags: e.target.value })}
            value={tweet.hashTags}
            type="text"
            className="create__control2"
            placeholder="add some hashtags"
          />
        </div>
      </div>
      <div className="create__second">
        <div className="create__icons">
          <FaRegImage className="ic" />
          <FaRegListAlt className="ic" />
          <FaRegSmile className="ic" />
          <FaCalendarCheck className="ic" />
        </div>
        <div className="create__btn">
          <button type="submit" onClick={submitTweet} className="createTweeet">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
