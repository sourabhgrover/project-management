import React from "react";

const ProjectSummary = (props) => {
    const { project } = props;
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title ">{project.title}</span>
                <p>Posted by Sourabh Grover</p>
                <p className="grey-text">18th Feburary, 2am</p>
            </div>
        </div>
    );
}

export default ProjectSummary;