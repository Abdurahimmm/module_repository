import React, {Fragment} from 'react';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import './Layout.css';

const Layout = (props) => {
  return (
    <Fragment className="ToolBar">
      <ToolBar/>
      <main>
        {props.children}
      </main>
    </Fragment>
  );
}

export default Layout;
