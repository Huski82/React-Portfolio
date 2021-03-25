import React, { Component } from 'react';
import Card from ';
import projects from ';
import './../assets/styles/portfolio.css';


class Portfolio extends Component {
  
  state = {
    projects: projects,
  }

  render() {
    
    const projectsArr = this.state.projects;
    const newProjectsArr = projectsArr.map((project) => 
      <Card 
        id={project.id}
        name={project.name}
        image={project.image}
        description={project.description}
        tryLink={project.tryLink}
        repository={project.repository}
        note={project.note}
        technologies={project.technologies}
      />
    );

    return(
      <div>

        <div className="container mb-5">
          <h1>Portfolio</h1>
          <h3>These are projects I've worked on.</h3>
        </div>
          
        
        <div className="flex-container">
          
          {/* render the newProjects array, which is an array of Bootstrap cards */}
          {newProjectsArr}

        </div>
      </div>
        
    );
  }
}

export default Portfolio;
