import React from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Tweets from './pages/Tweets/Tweets';

function App() {
  return (
   <Router>
     <Route exact path="/" component={Home}/>
     <Route exact path="/tweets" component={Tweets}/>


   </Router>
  );
}

export default App;
