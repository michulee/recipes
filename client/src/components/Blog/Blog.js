import React, { useState, useEffect } from "react";
import axios from "axios";
import "./_Blog.scss";
import unsplash from "../../api/unsplash";
import { v4 as uuidv4 } from "uuid";
import SmallCardSquare from "../Cards/SmallCardSquare/SmallCardSquare";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
// import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

export default function Blog(props) {
  const [photos, setPhotos] = useState([]);

  // https://codesandbox.io/s/beating-async-race-conditions-in-react-7759f?file=/src/DataDisplayer.js
  // componentDidUpdate() fires with new props or setState or forceUpdate
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const data = await unsplash.collections.getPhotos({
        collectionId: "e6Ypx3GRJLw",
      });
      // setPhotos(data.response.results);

      if (isMounted) {
        setPhotos(data.response.results);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };

    // console.log(photos)
    // photos.map(item => console.log(item.urls.regular))
  }, []);

  const CardList = (props) => {
    // const photos = props.src;

    // display up to props.items
    const photos = props.src.slice(0, props.items);
    
    return (
      <>
        {photos.map((photo, i) => {
          if (i % 2 === 0) {
            return (
              <div className="row " key={photo.id}>
                <SmallCardSquare
                  className="card"
                  src={photo.urls.regular}
                  alt={photo.alt_description}
                />
                <div className="adjust">
                  <h3>Delicious avocado toast</h3>
                  <p>
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate
                    strategy foster collaborative thinking to further the
                    overall value proposition. Organically grow the holistic
                    world view of disruptive innovation via workplace diversity
                    and empowerment.
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="row align-right" key={photo.id}>
                <div className="adjust">
                  <h3>Delicious fish with sauce</h3>
                  <p>
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate
                    strategy foster collaborative thinking to further the
                    overall value proposition. Organically grow the holistic
                    world view of disruptive innovation via workplace diversity
                    and empowerment.
                  </p>
                </div>
                <SmallCardSquare
                  className="card"
                  src={photo.urls.regular}
                  alt={photo.alt_description}
                />
              </div>
            );
          }
        })}
      </>
    );
  };

  // if (photos) {
  return (
    <div className="blog">
      <div className="subheader">
        <h2 className="title">Editor's Choice</h2>
        <FontAwesomeIcon icon={faArrowAltCircleRight}/>
      </div>

      {/* <div className="grid">
          <CardList src={photos}/>
        </div> */}

      <div className="grid">
        <CardList src={photos} items={props.items} />
      </div>
    </div>
  );
  // }
  // else {
  //   return null;
  // }
}
