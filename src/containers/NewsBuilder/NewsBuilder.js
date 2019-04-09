import React, { Component, Fragment } from 'react'
import Example from './../../components/UI/Carusiel/Carusiel';
import './NewsBuilders.css'
import NewsPage from '../../components/NewsPage/NewsPage';

export default class NewsBuilder extends Component {
  render() {
    return (
      <Fragment>
        <Example></Example>
        <NewsPage/>
      </Fragment>
    )
  }
}
