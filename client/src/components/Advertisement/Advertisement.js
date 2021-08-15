import React, { useState, useEffect } from "react";
import "./_Advertisement.scss";
import unsplash from "../../api/unsplash";

export default function Advertisement(props) {
  const [advertisement, setAdvertisements] = useState([]);
  //

  // const CardItem = (props) => {
  //   // return <SmallCard src={props.url}/>
  //   return(

  //   );
  // }

  const List = (props) => {
    const photos = props.src;
    // const listOfCards = photos.map((photo) => {
    //   return(
    //     <div className="row" key={photo.id} >
    //       <SmallCardSquare className="card" src={photo.urls.small} alt={photo.alt_description}/>
    //       <div>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
    //     </div>
    //   )
    // });

    const listOfCards = [];

    for (let i = 0; i < props.items; i++) {
      // 0 and even
      if (i % 2 === 0) {
        listOfCards.push(
            <div className="row align-left" key={photos[i].id}>
              <img
                className="card"
                src={photos[i].urls.small}
                alt={photos[i].alt_description}
              />
              <div className="adjust">
                <h3>Delicious avocado toast</h3>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
              </div>
            </div>
        );
      } else {
        //odd
        listOfCards.push(
            <div className="row align-right" key={photos[i].id}>
              <div className="adjust">
                <h3>Delicious fish with sauce</h3>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
              </div>
              <img
                className="card"
                src={photos[i].urls.small}
                alt={photos[i].alt_description}
              />
            </div>
        );
      }
    }

    //this works with photos.map((photo) => <SmallCard/>)
    // return(
    //   <div>{listOfCards}</div>
    // );

    //this works with photos.map((photo) => return <SmallCard/>)
    return listOfCards;
  };

  //   https://codesandbox.io/s/beating-async-race-conditions-in-react-7759f?file=/src/DataDisplayer.js
  // componentDidUpdate() fires with new props or setState or forceUpdate
  useEffect(() => {
    const fetchData = async () => {
      const data = await unsplash.collections.getPhotos({
        collectionId: "e6Ypx3GRJLw",
      });
      setAdvertisements(data.response.results);
    };
    fetchData();
  });

  if (advertisement) {
    return (
      <div className="advertisement">
        {/* <h2 className="subheader">Editor's Choice</h2> */}

        {/* <div className="grid">
          <CardList src={photos}/>
        </div> */}

        <div className="grid">
          <List src={advertisement} items={props.items} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
