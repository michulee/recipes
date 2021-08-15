import React, { useState, useEffect } from "react";
import "./_Navigation.scss";
import { faEllipsisV, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Navigation(props) {
  const [toggleSearch, setSearch] = useState(false);
  const handleSearch = (e) => {
    setSearch(true);
    console.log('click')

    // click on search button, then return new search component

    // if next is click on search icon || not on search area, then toggleSerach(false) return old component
    // useEffect, if new search component is up, if next is click on search icon || not on search area, then toggleSerach(false) return old component
  }

  const ToggledSearch = (e) => {
    return (
      <div className="search">
        {/* <FontAwesomeIcon onClick={handleSearch} className="icon" icon={faSearch} size="lg"/> */}
        <FontAwesomeIcon className="icon" icon={faSearch} size="lg"/>
      </div>
    );
  }

  useEffect((e) => {
    if(toggleSearch) {
      console.log('toggled search')
      // click on button then search

      // press enter then search

      // click outside of search then setSearch(false)
      console.log(e.target)
    }
  }, [toggleSearch])

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
          {toggleSearch ? <ToggledSearch/> : <FontAwesomeIcon onClick={handleSearch} className="icon" icon={faSearch} size="lg"/>}

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
