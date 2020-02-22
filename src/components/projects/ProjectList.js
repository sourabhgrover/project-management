import React from "react";
import { connect } from "react-redux";

import ProjectSummary from "./ProjectSummary";

const ProjectList = (props) => {

    const { projects } = props;
    return (
        <div className="project-list section" >
            {projects.map(project => {
                return <ProjectSummary project={project} key={project.id} />
            })}
        </div >
    );
}

const mapStateToProps = (state, ownProps) => {
    return { projects: state.project.projects };
}

export default connect(mapStateToProps)(ProjectList);