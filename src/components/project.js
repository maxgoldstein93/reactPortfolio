import React from "react";

function Project (props){
    return(
        <div className="col-md-4 col-lg-4 pb-5" key={props.key}>
        <div className="card text-white bg-dark shadow p-3 mb-5 rounded ">
            <a href={props.github} target="_blank">
                <img src={props.image} className="card-img-top " alt="..."/>
            </a>
            <div className="card-body">
                <p className="card-text">
                <h3>{props.name}</h3>
                </p>
                <p className="card-text">Click Photo to deploy app</p>
                <p><a href={props.repo} target="_blank">Deploy Repository</a>
                </p>
                <p className="card-text">{props.info} </p>
            </div>
        </div>
    </div>

    )
   
}
export default Project;