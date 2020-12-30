import React, { Component } from "react";
import productsDataService from "../services/services";
//import { Link } from "react-router-dom";

export default class ListProducts extends Component {
    constructor(props) {
        super(props);
        //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveTutorials= this.retrieveTutorials.bind(this);
       // this.refreshList = this.refreshList.bind(this);
      //  this.setActiveTutorial = this.setActiveTutorial.bind(this);
       // this.removeAllTutorials = this.removeAllTutorials.bind(this);
      //  this.searchTitle = this.searchTitle.bind(this);

        this.state = {
            tutorials: []
        };
    }
    componentDidMount() {
        this.retrieveTutorials();
    }

    retrieveTutorials() {
        productsDataService.getAllProducts()
            .then(response => response.json())
            .then(data=> this.setState({
                    tutorials: data

        }))
            .catch(e => {
                console.log(e);
            });
    }
    /*getAllProducts() {
        console.log(localStorage.getItem("access-token"))
        fetch("http://localhost:8082/all", {
            method: "GET",
            headers: {"Content-Type": "application/json",
               // "Access-Control-Allow-Origin": "http://localhost:3000",
               // "Access-Control-Allow-Credentials": "true",
                "Authorization": 'Bearer ' +localStorage.getItem("access-token")
            }
        }).then(response=>this.setState({
            tutorials:  response.data.items
        }))

       // return await response.json()


        // this.props.history.push('/all');

    }*/


    render() {
        const { tutorials } = this.state;

        return (
            <div className="col-md-6">
                <h4>Products categories</h4>
                <ul className="list-group">
                    {tutorials.map((tutorial, index) => (
                        <li>
                            {tutorial.name}
                        </li>
                    ))}
                </ul>



            </div>
        );
    }
}
