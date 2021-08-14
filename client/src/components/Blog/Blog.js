import React, { useState, useEffect } from "react";
import axios from "axios";
import "./_Blog.scss";
import unsplash from "../../api/unsplash";
import {v4 as uuidv4} from 'uuid';
import SmallCard from "../Cards/SmallCard/SmallCard";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
// import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

export default function Blog(props) {
  const [photos, setPhotos] = useState([]);

  // 

  // const CardItem = (props) => {
  //   // return <SmallCard src={props.url}/>
  //   return(

  //   );
  // }

  const CardList = (props) => {
    const photos = props.src;
    const listOfCards = photos.map((photo) => {
      // <SmallCard key={photo.id} src={photo.urls.small} alt={photo.alt_description}/>
      // return <SmallCard key={photo.id} src={photo.urls.small} alt={photo.alt_description}/>
      return(
        <>
          <div className="row">
            <SmallCard key={photo.id} src={photo.urls.small} alt={photo.alt_description}/>
            <div>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
          </div>
        </>
      )
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
      <div className="blog">
        <h2 className="subheader">Editor's Choice</h2>
        <div className="grid">
          <CardList src={photos}/>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
