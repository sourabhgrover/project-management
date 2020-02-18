import React from "react";
import { connect } from "react-redux";

import ProjectSummary from "./ProjectSummary";

const ProjectList = () => {

    return (
        <div className="project-list section">
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return state;
}

export default connect(mapStateToProps)(ProjectList);