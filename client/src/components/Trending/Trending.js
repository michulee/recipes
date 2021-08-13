import React, { useState, useEffect } from "react";
import axios from "axios";
import "./_Trending.scss";
import unsplash from "../../api/unsplash";
import {v4 as uuidv4} from 'uuid';
import SmallCard from "../Cards/SmallCard/SmallCard";

export default function Trending(props) {
  const [photos, setPhotos] = useState([]);

  // const CardItem = (props) => {
  //   // return <SmallCard src={props.url}/>
  //   return(

  //   );
  // }

  const CardList = (props) => {
    const photos = props.src;
    const listOfCards = photos.map((photo) => {
      // <SmallCard key={photo.id} src={photo.urls.small} alt={photo.alt_description}/>
      return <SmallCard key={photo.id} src={photo.urls.small} alt={photo.alt_description}/>
    });
    //this works with photos.map((photo) => <SmallCard/>)
    // return(
    //   <div>{listOfCards}</div>
    // );

    //this works with photos.map((photo) => return <SmallCard/>)
    return(
      listOfCards
    );
  }

  //   https://codesandbox.io/s/beating-async-race-conditions-in-react-7759f?file=/src/DataDisplayer.js
  // componentDidUpdate() fires with new props or setState or forceUpdate
  useEffect(() => {
    const fetchData = async () => {
      const data = await unsplash.collections.getPhotos({ collectionId: 'e6Ypx3GRJLw' })
      setPhotos(data.response.results);
    };
    fetchData();
  });

  if (photos) {
    return (
      <div className="trending">
        <h2 className="subheader">Trending</h2>
        {/* {console.log(<CardList/>)} */}
        <div className="grid">
          <CardList src={photos}/>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
