import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [state, setState] = useState();

  //[] is state to update when it detects the state has changed
  useEffect(() => {
    axios.get('http://localhost:3001/posts').then((res) => console.log(res))
  }, [])

  return (
    <div className="App">
      <div>
      </div>
    </div>
  );
}

export default App;
