import React, {Component} from "react";
import Scrape from "../articles/scrape"
import Exercise from "../../pages/Excercise/Excercise"
import Cover from "../cover/cover"
import Form from "../Form/Form"
import Showpost from "../Showpost/Showpost"


class DashboardPub extends Component {
    render () {

        return(
            <div className="container">
            <Cover />
            <div className="row" />
            <div className="xs-col-6" />
            {/* <Form /> */}
            <div className="xs-col-6" />
            {/* <Showpost /> */}


            <div className="row" />
            <div className="xs-col-6" />
            <Exercise />
            <div className="xs-col-6" />
            <Scrape />
            </div>
        )
    };
    
}


export default DashboardPub;