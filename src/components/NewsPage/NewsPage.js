import React, { Component,Fragment } from 'react';
import axios from '../../axios-news'
import './NewsPage.css';
import PageItem from './PageItem/PageItem';

class NewsPage extends Component {
  state = {
    news: {}
  };

   componentDidMount() {
        axios.get('/news.json?orderBy="date"&limitToLast=3')
            .then(response => {
                this.setState({
                    news: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    

  component
  render() {
    
      let news = Object.keys(this.state.news).map(newsId => {
            const newsItem = this.state.news[newsId];
             return (
               <PageItem
                  title={newsItem.title}
                  text={newsItem.text}
                  fileUrl={newsItem.imgUrl}
               />
             )
       
        });
    return (

      <Fragment>
        <div>
          {news}
        </div>
      </Fragment>
    );
  }
}

export default NewsPage;