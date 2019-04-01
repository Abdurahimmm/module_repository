import React from 'react';
import NavigationList from '../NavigationList/NavigationList'
import Logo from './../Logo/Logo';
import './ToolBar.css'

const ToolBar = (props) => {
  
  return (
    <header className="ToolBar">
      <Logo></Logo>
      <NavigationList/>
    </header>
  );
}

export default ToolBar;