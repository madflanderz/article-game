import './App.css';

import * as React from 'react';

// import Description from './Description';
// import Header from './Header';
// import logo from './logo.svg';
import Footer from './Footer';
import Wordgame from './words/Wordgame';



class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Wordgame />
        <Footer />
      </div>
    );
  }
}

export default App;
