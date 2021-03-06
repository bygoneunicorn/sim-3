import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Nav from './components/Nav/Nav';
import routes from './routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav location={this.props.location.pathname}/>
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
