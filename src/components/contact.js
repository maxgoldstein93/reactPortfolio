import React from "react";

function Contact (){

    const styles = {
        color: "white"

    }

    return(
       
        <main className="container dark bg-dark mt-5 mt-5 shadow p-3 mb-5 rounded ">
       
            <header id="contact" className="row pt-3 ">
                <div className="col-md">
                    <h1 style={styles}>Contact:</h1>
                </div>
            </header>
            <section className="row">
                <div className="col-md">
                    <div className="row">
                        <header className="col-md">
                            <h4 style={styles}>Phone: 412-417-0884</h4>
                        </header>
                    </div>
                </div>
            </section>
        </main>
        
    );
    
}

export default Contact;
