import React, {useState} from "react";
import img from "./Sacrifice.png";

const Image = () => {

  const changeWidth = () =>
  {
    var size = document.getElementById('but')
    var w = size.style.width
    w = parseInt(w.substring(0, w.length-2))
    w = w + 0.2*w
    size.style.width = String(w) + 'px'
  }

  return (
    <div style={{textAlign:"center"}}>
      <button onClick={()=>{changeWidth()}} style={{width:"430px", marginTop:"50px"}}>
        <img id="but" src={img} style={{width:"400px"}}/>
      </button>
    </div>
  );
};

export default Image;
