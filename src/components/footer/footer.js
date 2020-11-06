import React from "react";


function Footer() {

    const styles = {
        color: "white"

    }
    const style2 = {
        color: "black"

    }


    return (

        <footer className="fixed-bottom">
            <div class="card bg-dark text-white">
                <div className="row m-auto">
                    <a className="nav-link" href="https://www.linkedin.com/in/max-goldstein-11a33396/" target="_blank"><i style={styles} className="fab fa-linkedin fa-2x"></i></a>
                    <a className="nav-link" href="https://github.com/maxgoldstein93" target="_blank"><i style={styles} className="fab fa-github fa-2x"></i></a>
                    <a className="nav-link" href="https://drive.google.com/file/d/1bzMQ4plUtkiLCAkzJUYMm3so6KJZjpO5/view?usp=sharing" target="_blank"><i style={styles} className="far fa-file fa-2x"></i></a>
                    <a className="nav-link" href="mailto:magoldstein93@gmail.com" target="_blank"><i style={styles} className="far fa-envelope fa-2x"></i></a>
                    <a className="nav-link" href="tel:4124170884" ><i  style={styles} className="fas fa-mobile-alt fa-2x"></i></a>
                   
                    
                   
                </div>
            </div>
        </footer>
    );
}
export default Footer;


