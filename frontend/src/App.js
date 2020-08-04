import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './HomeScreen'
import ProductScreen from './ProductScreen'
import NavBar from './navbar/NavBar'
// import './App.css';

function App() {
  return (
    <div className="grid-conainer">
      <Router>
        <NavBar />
        <Route exact path="/" component={HomeScreen} />
        <Route path="/products/:id" component={ProductScreen} />
      </Router>
    </div>
  );
}

export default App;
