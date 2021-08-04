import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [state, setState] = useState([]);

  //[] is state to update when it detects the state has changed
  useEffect(() => {
    axios.get('http://localhost:3001/posts').then((res) => setState(res.data))
  }, []);

  // 15:22 - https://www.youtube.com/watch?v=DO_wR1tx-O0&t=12s&ab_channel=PedroTech
  return (
    <>
      <div className="App">
        <div>
          {state.map((value) => {
            return <div key={value.id}>{value.title}</div>
          })}
        </div>
      </div>
    </>
  );
}

export default App;
