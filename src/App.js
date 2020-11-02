import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer"


function App() {
  return (
    <div>
   <Navbar />

   <Footer />
   </div>
  );
}

export default App;
