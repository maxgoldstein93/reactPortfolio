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
                    <a className="nav-link" href="https://docs.google.com/document/d/e/2PACX-1vSgV67Zj3o5KY0pUWQUVf3qwFZ5tHWsSBJ-A_slNGhqYgeq5uLVbIPTY8MimwcCii21JTxv5HW7C3_R/pub" target="_blank"><i style={styles} className="far fa-file fa-2x"></i></a>
                    <a className="nav-link" href="mailto:magoldstein93@gmail.com" target="_blank"><i style={styles} className="far fa-envelope fa-2x"></i></a>
                    <a className="nav-link" href="tel:4124170884" ><i  style={styles} className="fas fa-mobile-alt fa-2x"></i></a>
                   
                    
                   
                </div>
            </div>
        </footer>
    );
}
export default Footer;


