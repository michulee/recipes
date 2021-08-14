import React, { useState, useEffect } from "react";
import axios from "axios";
import "./_SmallCardSquare.scss";

export default function SmallCardSquare(props) {
  const [state, setState] = useState({
    banner: "",
  });

  if (props) {
    return (
      <div className="smallCardSquare">
        <img src={props.src} alt={props.alt}/>
      </div>
    );
  } else {
    return null;
  }
}
