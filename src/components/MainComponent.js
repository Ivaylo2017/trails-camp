import React, {Component} from 'react';
import Directory from './DirectoryComponent';
import { CAMPSITES } from '../shared/campsites';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './HomeComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES
    }
  }
  

  render () {

    const HomePage = () => {
        return (
        <Home />
        );
    }

    return (
      <div>
          <Header />
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites}/>} />
              <Redirect to='/home' />
          </Switch>
          <Footer />
      </div>
    );
  }
}
export default Main;
