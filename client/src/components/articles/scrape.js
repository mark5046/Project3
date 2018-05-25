import React, { Component } from 'react';
import scrape from '../../utils/scrape';
import './scrape.css'

class Scrape extends Component {
    state = {
        articles: [],
    }

    componentDidMount() {
        scrape().then(articles => {
            this.setState({ articles });
        });
    }

    render() {
        console.log(this.state)
        return (
            <div className="scrapeWrapper">
            <h3 className="text-center">Here are the latest headlines from Men's Journal</h3>
            <ul className ="scrapeContainer">
                {this.state.articles.map(article => {
                    return <li className="row">
                        <div class="xs-col-3" />
                        <img src={article.img} />

                        <div class="xs-col-9" />
                        <a href={article.link} target="_blank"><h5>
                            {article.title}</h5>
                        </a>
                    </li>
                })}
            </ul>
        </div>
        );
    }
}

export default Scrape;