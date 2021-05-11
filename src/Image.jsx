import React, {useState} from "react";
import img from "./Sacrifice.png";

const Image = () => {

    const [w, setWidth] = useState("40px")

  return (
    <div style={{textAlign:"center"}}>
      <button style={{width:"430px", marginTop:"50px"}}>
        <img src={img} style={{width:"400px"}}/>
      </button>
    </div>
  );
};

export default Image;
