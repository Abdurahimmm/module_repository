import React, { Component } from 'react';
import './App.css';
import NewsBuilder from './containers/NewsBuilder/NewsBuilder';
import News from './components/News/News';
import AddNews from './components/AddNews/AddNews';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import ViewNews from './components/ViewNews/ViewNews';
import {Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/' exact component={NewsBuilder}/>
          <Route path='/news' component={News}/>
          <Route path='/addnews' component={AddNews}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/veiwnews/:id' component={ViewNews}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
