import React from "react";

function Contact (){

    const styles = {
        color: "white"

    }

    return(
       
        <main className="container border dark bg-dark mt-5 ">
       
            <header id="contact" className="row pt-3 ">
                <div className="col-md">
                    <h1 style={styles}>Contact</h1>
                </div>
            </header>
            <section className="row">
                <div className="col-md">
                    <div className="row">
                        <header className="col-md">
                            <h4 style={styles}>Phone: 412-417-0884</h4>
                            <h4 ><a style={styles} href ="mailto:magoldstein93@gmail.com">Email: magoldstein93@gmail.com<hr/></a></h4>
                        </header>
                    </div>
                </div>
            </section>
        </main>
        
    );
    
}

export default Contact;
