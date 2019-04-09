import React, { Component } from 'react';
import axios from '../../axios-news.js';
import NewsItem from './NewsItem/NewsItem.js';

class News extends Component {

    state = {
        news: []
    }
    componentDidMount() {
        axios.get('/news.json')
            .then(response => {
                this.setState({
                    news: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    render() {
        let news = Object.keys(this.state.news).map(newsId => {
            const newsItem = this.state.news[newsId];
             return <NewsItem
                    key={newsId}
                    title={newsItem.title}
                    text={newsItem.text}
                    imgUrl={newsItem.imgUrl}
                 />;
        });
        return (
            <div>
                {news}
            </div>
        );
    }
}

export default News;
