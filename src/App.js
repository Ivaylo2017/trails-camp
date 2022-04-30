import React, {Component} from 'react';
// import Main from './components/MainComponent';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

class App extends Component {

  render () {
    return (
      <BrowserRouter>
        <div className='App'>
            {/* <Main /> */}
            <Header />
            <CampsitesDirectoryPage/>
            <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
