import React, { useState, useEffect } from "react";
import axios from "axios";
import "./_Trending.scss";
import unsplash from "../../api/unsplash";
import {v4 as uuidv4} from 'uuid';
import SmallCard from "../Cards/SmallCardRound/SmallCardRound";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
// import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

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

  const handleCarousel = (e) => {
    // document.querySelector('.trending').scrollBy({
    //   top: 40,
    //   behavior: 'smooth',
    // })
    const a = document.querySelector('.trending')
    console.log(a)
  }

  if (photos) {
    return (
      <div className="trending">
        <h2 className="subheader">Trending</h2>
        <div className="grid">
          <CardList src={photos}/>
          <div className="icon__container" onClick={handleCarousel}>
            <FontAwesomeIcon className="icon" icon={faArrowAltCircleRight} size="3x"/>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
