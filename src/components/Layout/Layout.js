import React, {Fragment} from 'react';
import ToolBar from '../Navigation/ToolBar/ToolBar';

const Layout = (props) => {
  return (
    <Fragment>
      <ToolBar/>
      <main className="main">
        {props.children}
      </main>
    </Fragment>
  );
}

export default Layout;
