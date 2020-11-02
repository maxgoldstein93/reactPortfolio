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
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          About
        </Link>


            
            <a class="nav-link" href="portfolio.html">Portfolio</a>
            
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
          Contact
        </Link>

            
            <a class="nav-link" href="Assets/Max_Goldstein_October_Resume.pdf" target="_blank">Resume</a>
            <a class="nav-link" href="https://www.linkedin.com/in/max-goldstein-11a33396/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
            <a class="nav-link" href="https://github.com/maxgoldstein93" target="_blank"><i class="fab fa-github fa-2x"></i></a>
        </div>
    </div>
</nav>
    );


}

export default Navbar;