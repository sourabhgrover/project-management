import React from "react";

const CreateProject = () => {
    return (
        <div className="container">
            <form className="white" >
                <h5 className="grey-text text-darken-3">Create a New Project</h5>
                <div className="input-field">
                    <input type="text" id='title' />
                    <label htmlFor="title">Project Title</label>
                </div>
                <div className="input-field">
                    <textarea id="content" className="materialize-textarea" ></textarea>
                    <label htmlFor="content">Project Content</label>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1">Create</button>
                </div>
            </form>
        </div>
    );
}

export default CreateProject;