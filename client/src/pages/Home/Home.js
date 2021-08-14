import React, {useState, useEffect} from 'react';
import axios from 'axios';
import unsplash from '../../api/unsplash';

import './_Home.scss'
import Banner from '../../components/Banner/Banner';
import Trending from '../../components/Trending/Trending';
import Blog from '../../components/Blog/Blog';

export default function Home() {
  const [state, setState] = useState({
    banner: '',
  });

  // const unsplash = axios.create({ 
  //   baseURL: 'https://unsplash.com/photos/',
  //   headers: {
  //     Authorization: {'Client-ID': process.env.REACT_APP_ACCESS_KEY}
  //   },
  // });

  // useEffect(() => {
  //   axios.get('https://unsplash.com/photos/nBtmglfY0HU', {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       // Authorization: {'Client-ID': process.env.REACT_APP_ACCESS_KEY}
  //       // Authorization: 'Client-ID NpoPDzpvYHpEhRS6DkWHcOHkj7HYZFKUN-ZmNrfPa1A'
  //       // Authorization: 'Client-ID NpoPDzpvYHpEhRS6DkWHcOHkj7HYZFKUN-ZmNrfPa1A'
  //     },
  //     // auth: {
  //     //   username: process.env.REACT_APP_ACCESS_KEY,
  //     //   password: process.env.REACT_APP_SECRET_KEY
  //     // },
  //   })
  //   .then((res) => console.log(res.data))
  //   .catch((error) => console.log(error.message))
  // })

  // useEffect(() => {
  //   async function getToken() {
  //     const response = await unsplash.get("/photos/nBtmglfY0HU");
  
  //     setState({ ...state, banner: response.data });
  //   }

  // }, [])

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await unsplash.get("/photos/nBtmglfY0HU");
  //     setState({ ...state, banner: response.data });
  //   }
  //   fetchData();
  // })

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await unsplash.get('/photos/nBtmglfY0HU');
  //     // setState({ ...state, banner: response.data.urls.regular });
  //     setState({ ...state, banner: response.data});
  //   }
  //   fetchData();
  // })

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await unsplash.get('/photos/nBtmglfY0HU');
  //     // setState({ ...state, banner: response.data.urls.regular });
  //     setState({ ...state, banner: response.data});
  //   }
  //   fetchData();
  // }, [])
  // can't use [state] as dependency, because api call (even if nothing changed) I think triggers "new" change

  // useEffect(() => {
  //   let active = true;
  //   const fetchData = async () => {
  //     const data = await unsplash.photos.get({photoId: 'nBtmglfY0HU'});
  //     // const data = await response.json;
  //     if(active) {
  //       setState({ ...state, banner: data.response});
  //       // setState({ ...state, banner: data.response.json});
  //     }
  //   }
  //   fetchData();
  //   return () => {
  //     active = false;
  //   }
  // }, [state.banner])

  return (
    <>
      <section className="home">
          <Banner/>
          <Trending items={6}/>
          <Blog items={2}/>
      </section>
    </>
  );
}


