import { CREATE_PROJECT } from "./type";
export const createProject = () => {
    return (dispatch, getState) => {
        dispatch({
            type: CREATE_PROJECT,
            payload: {}
        });
    }
}