import React from 'react';
import {NavLink} from 'react-router-dom';
import './NewsItem.css'

const NewsItem = (props) => {
  return (
    <div className="articlesWrap">
      <h3 className="articlesTitle">{props.title}</h3>
      <NavLink className="articlesLink" to={'/veiwnews/' + props.id}>Read More</NavLink>
    </div>
  );
}

export default NewsItem;
