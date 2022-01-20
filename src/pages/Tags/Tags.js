import React from 'react';
import { useAlert } from "react-alert";

const Tags = () => {
    const location=window.location.pathname
    console.log(location);
    const tags=location.split('/')[2]
    console.log(tags);
    const alert = useAlert();
    const handleAlert=()=>{
        alert.success(`this is ${tags} tag`)
    }
  
  return <div>

<h1>this is {tags} tag </h1>
      <button onClick={handleAlert}>Show alert box</button>
  </div>;
};

export default Tags;
