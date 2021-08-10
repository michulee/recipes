import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './_Home.scss'
import Banner from '../../components/Banner/Banner';

export default function Home() {
  const [state, setState] = useState([]);

  return (
    <>
        <section>
            <Banner/>
        </section>
    </>
  );
}


