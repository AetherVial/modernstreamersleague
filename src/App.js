import React from 'react';
import './App.css';
import RSSFeed from './components/rssfeed';
import NavBar from './components/navbar';
import Home from './components/home';
import {HashRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home}/>
      </HashRouter>
    </div>
  );
}

export default App;
