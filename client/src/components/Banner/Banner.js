import React, { useState, useEffect } from "react";
import axios from "axios";
import "./_Banner.scss";
import unsplash from "../../api/unsplash";

export default function Banner(props) {
  // const [state, setState] = useState({
  //   banner: "",
  // });

  const [state, setState] = useState('');

  //   https://codesandbox.io/s/beating-async-race-conditions-in-react-7759f?file=/src/DataDisplayer.js
  // componentDidUpdate() fires with new props or setState or forceUpdate
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const data = await unsplash.photos.get({ photoId: "nBtmglfY0HU" });
      if(isMounted) {
        // setState({ ...state, banner: data.response });
        setState(data.response);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    }
  }, []);

  // return state && (
  //   <div className="banner">
  //     {console.log(state)}
  //     {/* <img src={state.banner.urls.regular} alt={state.banner.description} /> */}
  //     <img src={state.urls.regular} alt={state.description} />
  //   </div>
  // );

  const test = 0;
  return (
    <div className="banner">
      {/* <img src={state.banner.urls.regular} alt={state.banner.description} /> */}
      {state && <img src={state.urls.regular} alt={state.description} />}
    </div>
  );
}
