import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer"
import About from "./components/about"


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path = "/" component = {About} />

        <Footer />
      </div>
   </BrowserRouter>
  );
}

export default App;
