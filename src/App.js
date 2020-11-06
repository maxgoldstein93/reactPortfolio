import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer"
import About from "./components/About/about"
import Contact from "./components/contact"
import Portfolio from "./components/portfolio"






function App() {
  return (
    <Router>
      <div >
        <Navbar />
        
        <Route exact path = "/about" component = {About} />
        <Route exact path = "/contact" component = {Contact} />
        
        <Route exact path = "/portfolio" component = {Portfolio} />
        
        

        <Footer />
      </div>
   </Router>
  );
}

export default App;
