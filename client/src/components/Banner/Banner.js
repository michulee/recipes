import React, { useState, useEffect } from "react";
import axios from "axios";
import "./_Banner.scss";
import unsplash from "../../api/unsplash";

export default function Banner(props) {
  const [state, setState] = useState({
    banner: "",
  });

  //   https://codesandbox.io/s/beating-async-race-conditions-in-react-7759f?file=/src/DataDisplayer.js
  // componentDidUpdate() fires with new props or setState or forceUpdate
  useEffect(() => {
    const fetchData = async () => {
      const data = await unsplash.photos.get({ photoId: "nBtmglfY0HU" });
      setState({ ...state, banner: data.response });
    };
    fetchData();
  });

  if (state.banner) {
    return (
      <div className="banner">
        <img src={state.banner.urls.regular} alt={state.banner.description} />
      </div>
    );
  } else {
    return null;
  }
}
