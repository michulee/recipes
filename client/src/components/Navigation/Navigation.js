import React, { useState, useEffect } from "react";
import "./_Navigation.scss";
import { faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Navigation(props) {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    // click on search button, then return new search component
    // if next is click on search icon || not on search area, then return old search component
  }

  if (props) {
    return (
      <div className="navigation">
        <div className="left">
          <div className="logo">
            {/* <img src={props.logo.src} alt={props.logo.alt}/> */}
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fad%2FPlaceholder_no_text.svg%2F1200px-Placeholder_no_text.svg.png&f=1&nofb=1"/>
          </div>
        </div>
        <div className="right">
          <div className="search"></div>
          <FontAwesomeIcon onClick={handleSearch} className="icon" icon={faSearch} size="lg"/>

          <div className="menu"></div>
          <FontAwesomeIcon className="icon" icon={faEllipsisV} size="lg"/>

          <div className="profile">
            <div className="profileIcon">
              {/* <img src={props.profile.src} alt={props.profile.alt}/> */}
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fad%2FPlaceholder_no_text.svg%2F1200px-Placeholder_no_text.svg.png&f=1&nofb=1"/>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
