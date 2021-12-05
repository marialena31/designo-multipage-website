import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/homepage.component';

import './App.css';
import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route path='/web-design' component={WebDesignPage} />
        <Route path='/app-design' component={AppDesignPage} />
        <Route path='/graphic-design' component={GraphicDesignPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/locations' component={LocationsPage} />
        <Route path='/contact' component={ContactPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
