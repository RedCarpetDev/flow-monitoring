import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  Switch,Route,Link } from "react-router-dom";
import './App.css';
import ListProducts from "./components/list-products";
import Login from "./components/login";
import SignUp from "./components/signup";
class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/all"} className="nav-link">
                                        Categories
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path="/sign-in" component={Login} />
                        <Route path="/sign-up" component={SignUp} />
                        <Route exact path="/all" component={ListProducts} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
