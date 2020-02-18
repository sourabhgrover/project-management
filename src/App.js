import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                </div>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                </Switch>
            </BrowserRouter >

        );
    }
}

export default App;