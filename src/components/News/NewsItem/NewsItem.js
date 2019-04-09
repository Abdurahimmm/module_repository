import React from 'react';

const NewsItem = (props) => {
  return (
    <div className="wrapperNews">
      <h3 className="NewsItemTitle">{props.title}</h3>
      <img className="NewsItemImage" src={props.imgUrl} alt="ifdbgnbf"/>
      <p className="NewsItemText">{props.text}</p>
    </div>
  );
}

export default NewsItem;
