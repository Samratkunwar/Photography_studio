import React from 'react';
import { Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import './themes/variables.css';
import './css/style';

import Home from './pages/home/home.page';
import NavMenu from './components/NavMenu/navmenu.component';


function App() {
  return (

    <div className="App">
      <NavMenu />
      <Route path="/" component={Home} exact />
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
