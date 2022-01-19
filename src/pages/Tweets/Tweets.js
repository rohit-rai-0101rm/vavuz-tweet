import React from "react";
import { useSelector } from "react-redux";
import Tweet from "../../components/Tweet/Tweet";

import { selectTweets } from "../../features/Tweet/tweetSlice";
const Tweets = () => {
  const tweets = useSelector(selectTweets);
  console.log(tweets);
  return (
    <div>
        {
            tweets.map((tweet)=>(
                <Tweet tweet={tweet}/>

            ))
        }
    
    </div>
  );
};

export default Tweets;
