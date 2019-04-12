import React from 'react';
import {NavLink} from 'react-router-dom';
import './NewsItem.css'

const NewsItem = (props) => {
  return (
    <div className="articlesWrap">
      <h3 className="articlesTitle">{props.title}</h3>
      <img className="articlesImage" src={props.imgUrl} alt="ifdbgnbf"/>
      <p className="articlesText">{props.text}</p>
      <NavLink className="viewNewsLink" to={'/veiwnews/' + props.id}>Read More</NavLink>
      <button className="dalate"></button>
    </div>
  );
}

export default NewsItem;
