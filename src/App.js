import React from 'react';
import Navbar from './components/Navbar/';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/portfolio' component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;
