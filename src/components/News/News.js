import React, { Component } from 'react';
import axios from '../../axios-news.js';

class News extends Component {

    state = {
        title: '',
        text: ''
    }
    componentDidMount() {
        axios.get('/news.json')
            .then(response => {
                this.setState({
                    title: '',
                    text: ''
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Title here</h1>
                    <p>Text here</p>

                </div>
            </div>
        );
    }
}

export default News;
