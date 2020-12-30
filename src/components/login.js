import React, { Component } from "react";
import axios from "axios";
import productsDataService from "../services/services";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)

    }
    /*handleFormSubmit(event) {
        event.preventDefault();
        const data = JSON.stringify(this.state)
        console.log("data: "+data)

                productsDataService.login(data)
                    .then(response => {
                        //localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                       // this.props.onLogin();
                    }).catch(error => {
                    if(error.status === 401) {
                        notification.error({
                            message: 'Polling App',
                            description: 'Your Username or Password is incorrect. Please try again!'
                        });
                    }
                });

    }*/
    handleChange(e){
        const name = e.target.name

        this.setState( {
            [name]: e.target.value
        })
    }
    handleFormSubmit = async (event) => {
        event.preventDefault()

        // extract form data
        const formdata = new FormData(event.target)

        // convert FormData to json object
        // SOURCE: https://stackoverflow.com/a/46774073
        const json = {}
        formdata.forEach(function(value, prop){
            json[prop] = value
        })

        // convert json to urlencoded query string
        // SOURCE: https://stackoverflow.com/a/37562814 (comments)
        const formBody = Object.keys(json).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(json[key])).join('&')

        // POST the request to Staticman's API endpoint
        const response = await fetch("http://localhost:8087/login", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: formBody
        })
        const data = await response.json()
        localStorage.setItem("refresh-token",JSON.stringify(data["refresh-token"]))
        localStorage.setItem("access-token",JSON.stringify(data["access-token"]))
       // this.props.history.push('/all');

    }
   /* fetchData() {
        fetch('http://localhost:8087/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                username: 'admin',
                password: '1234',
                Authorization: 'TheReturnedToken',
            })
        })
            .then(results => results.json())
            .then(data => this.setState({ data: data })

            )
    }*/
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Login</label>
                    <input name="username" id="username" type="text" className="form-control" value={this.state.username} onChange={this.handleChange} placeholder="Enter login" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" id="password" type="password" className="form-control" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>

            </form>
        );
    }
}
