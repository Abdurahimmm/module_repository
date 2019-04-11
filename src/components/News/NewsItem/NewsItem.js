import React from 'react';

const NewsItem = (props) => {
  return (
    <div className="articlesWrap">
      <h3 className="articlesTitle">{props.title}</h3>
      <img className="articlesImage" src={props.imgUrl} alt="ifdbgnbf"/>
      <p className="articlesText">{props.text}</p>
    </div>
  );
}

export default NewsItem;
