import React from "react";
import { Link, useLocation } from "react-router-dom";


function Navbar (){
    const location =useLocation();

    return(

    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Max Goldstein</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
        <Link to="/about" className="nav-link active" >
          About
        </Link>
        <Link to="/portfolio" className="nav-link active">
         Portfolio
        </Link>
            <Link to="/contact" className= "nav-link active" >
          Contact
        </Link>

        </div>
    </div>
</nav>
    );


}

export default Navbar;