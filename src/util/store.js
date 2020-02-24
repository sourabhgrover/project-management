import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";

import combineReducers from "../reducers";
import firebaseConfig from "../config/firebaseConfig";

const store = createStore(combineReducers, compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig)
));

export default store;