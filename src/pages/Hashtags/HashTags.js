import React from "react";
import { useAlert } from "react-alert";

const HashTags = () => {
    const location=window.location.pathname
    console.log(location);
    const hashTag=location.split('/')[2]
    console.log(hashTag);
  const alert = useAlert();
  const handleAlert=()=>{
      alert.success(`this is ${hashTag} hashtag`)
  }


  return (
    <div>
      <h1>this is {hashTag} hashtag </h1>
      <button onClick={handleAlert}>Show alert box</button>
    </div>
  );
};

export default HashTags;
