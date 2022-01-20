import React from "react";
import { useAlert } from "react-alert";
import './Tags.css'
const Tags = () => {
  const location = window.location.pathname;
  console.log(location);
  const tags = location.split("/")[2];
  console.log(tags);
  const alert = useAlert();
  const handleAlert = () => {
    alert.success(`this is ${tags} tag`);
  };

  return (
    <div className="tagsContainer">
        <div>
        <h1>this is {tags} tag </h1>
      <button className="btn" onClick={handleAlert}>Show alert box</button>
        </div>
     
    </div>
  );
};

export default Tags;
