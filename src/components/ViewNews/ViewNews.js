import React, { Component } from 'react';
import './ViewNews.css';
import axios from '../../axios-news';

class ViewNews extends Component {
    state = {
        news: {}
    }
    componentDidMount() {
        axios.get('/news.json')
            .then(response => {
                console.log(response)
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
                
            </div>
        );
    }
}

export default ViewNews;
