import React, {Fragment} from 'react';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import Footer from './../Footer/Footer';

const Layout = (props) => {
  return (
    <Fragment>
      <ToolBar/>
      <main className="main">
        {props.children}
      </main>
      <Footer></Footer>
    </Fragment>
  );
}

export default Layout;
