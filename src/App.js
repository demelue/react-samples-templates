import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/App.css';
import Home from './components/Home';
import * as routes from './constants/routes';
import Display from './components/Display';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path={routes.HOME} component={() => <Home />} />
          <Route exact path={routes.NAVIGATION} component={() => <Display template="Navigation"/>} />
          <Route exact path={routes.MISC} component={() => <Display template="Misc"/>} />
          <Route exact path={routes.FORMS} component={() => <Display template="Forms"/>} />
          <Route exact path={routes.ALERT} component={() => <Display template="Alert"/>} />
          <Route exact path={routes.ICON} component={() => <Display template="Icon"/>} />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
