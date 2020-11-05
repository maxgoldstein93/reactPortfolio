import React from "react";


function Portfolio() {

    const styles = {
        color: "white"
    }

   

    


    return (


<main className="container border dark bg-dark mt-5 w-75 ">
        <section className="row p-3">
            <header className="col-md-6 pb-5">
                <h1 style={styles}>Portfolio</h1>
            </header>
        </section>
        <section className="row">
            <div className="col-md-6 col-lg-6 pb-5">
                <div className="card text-white bg-dark border ">
                    <a href="https://maxgoldstein93.github.io/Local-Brews/" target="_blank">
                        <img src="Assets/localbrews.png" className="card-img-top " alt="..."/>
                    </a>
                    <div className="card-body">
                        <p className="card-text">
                        <h3>Local Brews</h3>
                        </p>
                        <p className="card-text">Click Photo to deploy app</p>
                        <p><a href="https://github.com/maxgoldstein93/Local-Brews" target="_blank">Deploy Repository</a>
                        </p>
                        <p className="card-text">Local Brews is a group project that I completed to find local breweries
                            utilizing Mapbox and Open Brewery API. </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 pb-5">
                <div className="card text-white bg-dark border">
                    <a href="https://stream-saver.herokuapp.com/" target="_blank">
                        <img src="Assets/screensaver.png" className="card-img-top img-fluid" alt="Stream saver"/>
                    </a>
                    <div className="card-body">
                        <p className="card-text">
                        <h3>Stream Saver</h3>
                        </p>
                        <p className="card-text">Click Photo to deploy app</p>
                        <p><a href="https://github.com/maxgoldstein93/Stream-Saver" target="_blank">Deploy
                                Repository</a></p>
                        <p className="card-text">Stream Saver is a full-stack group project utilizing passport, sequelize, bootstrap, express, node.js, and handlebars.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 pb-5">
                <div className="card text-white bg-dark border">
                    <a href="https://maxgoldstein93.github.io/WeatherDashboard/" target="_blank">
                        <img src="Assets/weatherDashboard2.png" className="card-img-top " alt="..."/>
                    </a>
                    <div className="card-body">
                        <p className="card-text">
                        <h3>Weather Dashboard</h3>
                        </p>
                        <p className="card-text">Click Photo to deploy app</p>
                        <p><a href="https://github.com/maxgoldstein93/WeatherDashboard" target="_blank">Deploy
                                Repository</a></p>
                        <p className="card-text">The weather dashboard takes in the users location and displays the current
                            and five day weather forcast.</p>
                    </div>
                </div>
            </div>
            
            <div className="col-md-6 pb-5">
                <div className="card text-white bg-dark border">
                    <a href="https://eatthedonutapp.herokuapp.com/" target="_blank">
                        <img src="Assets/donut.png" className="card-img-top img-fluid" alt="donut app"/>
                    </a>
                    <div className="card-body">
                        <p className="card-text">
                        <h3>Eat a Donut App</h3>
                        </p>
                        <p className="card-text">Click Photo to deploy app</p>
                        <p><a href="https://github.com/maxgoldstein93/eatTheDonutApp/" target="_blank">Deploy
                                Repository</a></p>
                        <p className="card-text">Eat a Donut is a full-stack application using express, handlebars and MYSQL.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 pb-5">
                <div className="card text-white bg-dark border">
                    <a href="https://maxgoldstein93.github.io/Javascriptquiz/" target="_blank">
                        <img src="Assets/codeQuiz.png" className="card-img-top img-fluid" alt="..."/>
                    </a>
                    <div className="card-body">
                        <p className="card-text">
                        <h3>Code Quiz</h3>
                        </p>
                        <p className="card-text">Click Photo to deploy app</p>
                        <p><a href="https://github.com/maxgoldstein93/Javascriptquiz" target="_blank">Deploy
                                Repository</a></p>
                        <p className="card-text">The Java Script code quiz is an app to test web development students skills
                            and record their results in local storage.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 pb-5">
                <div className="card text-white bg-dark border">
                    <a href="https://sleepy-harbor-54323.herokuapp.com/" target="_blank">
                        <img src="Assets/notetaker.png" className="card-img-top img-fluid" alt="..."/>
                    </a>
                    <div className="card-body">
                        <p className="card-text">
                        <h3>Note Taker</h3>
                        </p>
                        <p className="card-text">Click Photo to deploy app</p>
                        <p><a href="https://github.com/maxgoldstein93/noteTaker" target="_blank">Deploy
                                Repository</a></p>
                        <p className="card-text">Note taker is in application using node.js that reads and writes new notes based on user input.</p>
                    </div>
                </div>
            </div>
            

        </section>
    </main>
    )

    }
    export default Portfolio;