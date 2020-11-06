import React, {Component} from "react";
import projects from "../projects.json"
import Project from "./project"



class Portfolio extends Component{

    state = {
        project: projects
    


}
componentDidMount(){
    this.setState({project: projects})
}
                
    styles = {
        color: "white"
    }

    render(){
    return (
        
<div className="container   mt-5 w-75 ">
        <section className="row p-3">
            <header className="col-md-6 pb-5">
                
            </header>
        </section>
        <section className="row">
        {this.state.project.map(newProject =>
        <Project key={newProject.id} name={newProject.name} info={newProject.info} github={newProject.github} repo={newProject.repo}  image={newProject.image}/>

            )}
           

        </section>
    </div>
    )

    }
}
    export default Portfolio;