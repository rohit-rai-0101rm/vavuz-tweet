import React from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Tweets from './pages/Tweets/Tweets';
import HashTags from './pages/Hashtags/HashTags';
import Tags from './pages/Tags/Tags';

function App() {
  return (
   <Router>
     <Route exact path="/" component={Home}/>
     <Route exact path="/tweets" component={Tweets}/>
     <Route exact path="/hashtags/:hash" component={HashTags}/>
     <Route exact path="/mentions/:tags" component={Tags}/>



   </Router>
  );
}

export default App;
