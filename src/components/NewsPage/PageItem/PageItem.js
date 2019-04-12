import React from 'react';
import './PageItem.css';
import {NavLink} from 'react-router-dom';

const PageItem = (props) => {
  return (
        <div className="wrapperNews">
          <div className="imgWrap">
            <img className="NewsItemImage" src={props.fileUrl} alt="img$"/>
          </div>
          <h3 className="NewsItemTitle">{props.title}</h3>
          <p className="NewsItemText">{props.text}</p>
          <NavLink className="NewsPageLink" to={'/veiwnews/' + props.id}>Read More</NavLink>
        </div>
  );
}

export default PageItem;
