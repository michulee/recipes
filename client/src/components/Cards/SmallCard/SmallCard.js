import React, { useState, useEffect } from "react";
import axios from "axios";
import "./_SmallCard.scss";

export default function SmallCard(props) {
  const [state, setState] = useState({
    banner: "",
  });

  // if (state.banner) {
    return (
      <div className="smallCard">
        <img src={props.url}/>
      </div>
    );
  // } else {
    // return null;
  // }
}
