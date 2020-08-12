import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './components/screens/HomeScreen'
import ProductScreen from './components/screens/ProductScreen'
import NavBar from './components/navbar/NavBar'
import CartScreen from './components/screens/CartScreen'

// import './App.css';

function App() {
  return (
    <div className="grid-conainer">
      <Router>
        <NavBar />
        <Route exact path="/" component={HomeScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/products/:id" component={ProductScreen} />
      </Router>
    </div>
  );
}

export default App;
