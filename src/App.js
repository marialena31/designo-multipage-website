import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import HomePage from './pages/HomePage/homepage.component';
import WebDesignPage from './pages/WebDesignPage/webdesignpage.component';
import AboutPage from './pages/AboutPage/aboutpage.component';
import AppDesignPage from './pages/AppDesignPage/appdesignpage.component';
import GraphicDesignPage from './pages/GraphicDesignPage/graphicdesignpage.component';
import LocationsPage from './pages/LocationsPage/locationspage.component';
import ContactPage from './pages/ContactPage/contactpage.component';

import './App.css';
import './sass/main.scss';

function App() {
  const location = useLocation()
  const [currentPage, setCurrentPage] = React.useState(() => 
                                              location.pathname === '/' ? 
                                                'home' : 
                                                location.pathname
                                            )

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={(props) => (<HomePage {...props} currentPage={currentPage} setCurrentPage={setCurrentPage}/>)} />
        <Route path='/web-design' render={(props) => (<WebDesignPage {...props} currentPage={currentPage} setCurrentPage={setCurrentPage}/>)} />
        <Route path='/app-design' render={(props) => (<AppDesignPage {...props} currentPage={currentPage} setCurrentPage={setCurrentPage}/>)} />
        <Route path='/graphic-design' render={(props) => (<GraphicDesignPage {...props} currentPage={currentPage} setCurrentPage={setCurrentPage}/>)} />
        <Route path='/about' render={(props) => (<AboutPage {...props} currentPage={currentPage} setCurrentPage={setCurrentPage}/>)} />
        <Route path='/locations' render={(props) => (<LocationsPage {...props} currentPage={currentPage} setCurrentPage={setCurrentPage}/>)} />
        <Route path='/contact' render={(props) => (<ContactPage {...props} currentPage={currentPage} setCurrentPage={setCurrentPage}/>)} />
      </Switch>
    </div>
  );
}

export default App;
