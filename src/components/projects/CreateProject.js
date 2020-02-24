import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";


const CreateProject = (props) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const projectObj = {
            title,
            content
        }
        props.createProject(projectObj);
    }
    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit} >
                <h5 className="grey-text text-darken-3">Create a New Project</h5>
                <div className="input-field">
                    <input type="text" id='title' value={title} name="title" onChange={(e) => setTitle(e.target.value)} />
                    <label htmlFor="title">Project Title</label>
                </div>
                <div className="input-field">
                    <textarea id="contenst" name="content" className="materialize-textarea" onChange={(e) => { setContent(e.target.value) }} value={content}></textarea>
                    <label htmlFor="content">Project Content</label>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1">Create</button>
                </div>
            </form>
        </div>
    );

}


export default connect(null, { createProject })(CreateProject);