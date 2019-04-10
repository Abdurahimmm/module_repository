import React from 'react';
import './PageItem.css'

const PageItem = (props) => {
  return (
    <div className="PageItem">
      <div className="wrapperNews">
        <h3 className="NewsItemTitle">{props.title}</h3>
        <img className="NewsItemImage" src={props.imgUrl} alt="ifdbgnbf"/>
        <p className="NewsItemText">{props.text}</p>
      </div>
    </div>
  );
}

export default PageItem;
