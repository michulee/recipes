import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.scss';
import Home from './pages/Home/Home';
import { createApi } from 'unsplash-js';

function App() {
  const [state, setState] = useState([]);

  //[] is state to update when it detects the state has changed
  useEffect(() => {
    axios.get('http://localhost:3001/posts').then((res) => setState(res.data)).catch((error) => error.message)
  }, []);

  // 15:22 - https://www.youtube.com/watch?v=DO_wR1tx-O0&t=12s&ab_channel=PedroTech
  return (
    <>
      <Router>
        <div>
          {state.map((value) => {
            return <div key={value.id}>{value.title}</div>
          })}
        </div>

        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
