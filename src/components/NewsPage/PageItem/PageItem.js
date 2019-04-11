import React from 'react';
import './PageItem.css';
import {NavLink} from 'react-router-dom';

const PageItem = (props) => {
  return (
        <div className="wrapperNews">
          <img className="NewsItemImage" src={props.fileUrl} alt="img$"/>
          <h3 className="NewsItemTitle">{props.title}</h3>
          <p className="NewsItemText">{props.text}</p>
          <NavLink to='/News'>Read More</NavLink>
        </div>
  );
}

export default PageItem;
