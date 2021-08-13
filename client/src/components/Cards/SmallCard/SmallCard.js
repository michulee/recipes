import React, { useState, useEffect } from "react";
import axios from "axios";
import "./_SmallCard.scss";

export default function SmallCard(props) {
  const [state, setState] = useState({
    banner: "",
  });

  if (props) {
    return (
      <div className="smallCard">
        <img src={props.src} alt={props.alt}/>
      </div>
    );
  } else {
    return null;
  }
}
