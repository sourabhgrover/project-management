import { CREATE_PROJECT,CREATE_PROJECT_ERROR } from "./type";

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log(project);
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorId: 12345,
            authorFirstName: 'Sourabh',
            authorLastName: 'Grover',
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: CREATE_PROJECT,
                payload: project
            });
        })
            .catch((e) => {
                dispatch({
                    type: CREATE_PROJECT_ERROR,
                    payload: e
                });
            })

    }
}