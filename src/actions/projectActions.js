import { CREATE_PROJECT } from "./type";
export const createProject = () => {
    return (dispatch, getState, { getFirestore }) => {
        dispatch({
            type: CREATE_PROJECT,
            payload: {}
        });
    }
}