import React from "react";
import { Link, useLocation } from "react-router-dom";
import Contact from "../contact"
import Portfolio from "../portfolio"
function About() {

    const styles = {
        color: "white"

    }
    return (
        <>
        <main className="container border dark bg-dark  mt-5 ">
            <div className="row p-3 ">
                <header className="col-md">
                    <h1 style={styles}>About Me</h1>
                </header>
            </div>
            <section className="row">
                <article className="col-md-12">
                    <img src="assets/Profile.JPG" alt="Profile Picture" className="rounded float-left pr-3 pb-3" />
                    <p style ={styles}>Max Goldstein is currently a web-development student at the UPenn LPS bootcamp, he is based out of Pittsburgh
                    Pennsylvania. Max attended the University of Utah in Salt Lake City and earned a BS degree in
                    Business with an emphasis in Operations Management. After graduation Max moved to Israel where he
                    was a Paratrooper in the Isreali Defense Forces. Upon completing his military service he returned to
                    America where he began a career as a chef and worked for James Beard award winning restaurant Zahav
                    in Philadelphia Pennsylvania. Max wants to become a professional web-developer and work in the tech
                    industry. Max enjoys cooking, running, skiing, hiking and traveling.
                </p>
                </article>
            </section>
           
        </main>
       
        </>

    );

}

export default About;

