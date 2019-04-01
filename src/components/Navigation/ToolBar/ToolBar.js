import React, {Fragment} from 'react';
import NavigationList from '../NavigationList/NavigationList'
import Logo from './../Logo/Logo';
import './ToolBar.css'

const ToolBar = (props) => {
  
  return (
    <Fragment>
      <Logo></Logo>
      <NavigationList/>
    </Fragment>
  );
}

export default ToolBar;