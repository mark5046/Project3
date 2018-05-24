// import React, { Component } from 'react';
import React, {Component} from 'react';
import Form from "../../components/Form";
// import List from "../../components/List";
import Showpost from "../../components/Showpost";
import API from "../../utils/API";


class Excercise extends Component {
    state = {
        userInputs: [],//store data from db into userInput for get request.
        title: "",
        description: "",
        link: ""
    }

    componentDidMount() {
        this.loadWorkouts();
      }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    //create a new workout when click submit button
    handleFormSubmit = event => {
        event.preventDefault();
        let newLink = this.state.link;

        if(!this.state.link.startsWith("http://") && !this.state.link.startsWith("https://")){
            console.log("TRUE OF FALSE", this.state.link, this.state.link.startsWith("https"))
            newLink = `http://${this.state.link}`;
        }

        const newWorkout = {
            title:this.state.title,
            summary: this.state.description,
            link: newLink           
        };    
            API.saveWorkout(newWorkout)
            .then(() => {
                this.loadWorkouts();
            })
            .catch(err => console.log(err));
    }
    
    loadWorkouts = () => {
        API.getWorkouts()
        .then(results => {
            this.setState({
                userInputs: results.data,
                title: "",                
                description: "",
                link: ""
            });
        });
            
    }

    render() {
        return (
            // <div className="container">
                <div id="row" className="row">
                    <Form title={this.state.title}
                                description={this.state.description}
                                link={this.state.link}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                    <Showpost posts={this.state.userInputs} />
                </div>
            // </div>
        );
    }
}

export default Excercise;