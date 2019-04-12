import React, { Component } from 'react';
import './ViewNews.css';
import axios from '../../axios-news';

class ViewNews extends Component {
    state = {
        newsItem: {}
    }
    componentDidMount() {
        
        const id = this.props.match.params.id;
        axios.get('/news/' + id + '.json')
            .then(response => {
                this.setState({
                    newsItem: response.data
                });
        });
    }
    render() {
        const {title, text, imgUrl} = this.state.newsItem;
        return (
            <div className="viewWrapper">
                <div className="viewImgWrap">
                    <h1 className="viewTitle ">{title}</h1>
                </div>
                <img className="viewImage" src={imgUrl} alt="Image With ViewNews"/>
                <p className="viewText">{text}</p>
            </div>
        );
    }
}

export default ViewNews;
