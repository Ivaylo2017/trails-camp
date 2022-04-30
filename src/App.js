import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailsPage from './pages/CampsiteDetailsPage';
import './App.css';


class App extends Component {

  render () {
    return (
        <div className='App'>
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/contactus' component={ContactPage} />
              <Route exact path='/directory' component={CampsitesDirectoryPage} />
              <Route path='/directory/:campsiteId' component={CampsiteDetailsPage} />
            </Switch>
            <Footer />
        </div>
    );
  }
}
export default App;
