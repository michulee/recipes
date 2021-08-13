import React, { useState, useEffect } from "react";
import axios from "axios";
import "./_Trending.scss";
import unsplash from "../../api/unsplash";
import {v4 as uuidv4} from 'uuid';
import SmallCard from "../Cards/SmallCard/SmallCard";

export default function Trending(props) {
  const [state, setState] = useState({
    banner: "",
  });
  const [photos, setPhotos] = useState([]);

  // const CardItem = (props) => {
  //   // return <SmallCard src={props.url}/>
  //   return(

  //   );
  // }

  const CardList = (props) => {
    const listOfCards = props.map((src) => {
      // <CardItem key={uuidv4()} src={url}/>
      <SmallCard key={uuidv4()} src={src}/>
    });
    return(
      {listOfCards}
    );
  }

  //   https://codesandbox.io/s/beating-async-race-conditions-in-react-7759f?file=/src/DataDisplayer.js
  // componentDidUpdate() fires with new props or setState or forceUpdate
  useEffect(() => {
    const fetchData = async () => {
      // const data = await unsplash.photos.get({ photoId: "nBtmglfY0HU" });
      // setState({ ...state, banner: data.response });

      const data = await unsplash.collections.getPhotos({ collectionId: 'e6Ypx3GRJLw' })
      setPhotos(data);
    };
    fetchData();
  });

  if (photos) {
    return (
      <div className="trending">
        <h2 className="subheader">Trending</h2>
        {/* <CardList src={photos}/> */}
      </div>
    );
  } else {
    return null;
  }
}
