import React, { useState, useEffect } from "react";
import axios from "axios";
import "./_SmallCardRound.scss";

export default function SmallCardRound(props) {
  const [state, setState] = useState({
    banner: "",
  });

  if (props) {
    return (
      <div className="smallCardRound">
        <img src={props.src} alt={props.alt}/>
      </div>
    );
  } else {
    return null;
  }
}
