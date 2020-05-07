import React from "react";
// import logo from "./logo.svg";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import "./App.css";
import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
// import Example from "pages/Example";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import Example from "pages/Example";

function App() {
  return (
    // <div className='App'>
    //   <header className='App-header'>
    //     <img src={logo} className='App-logo' alt='logo' />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className='App-link'
    //       href='https://reactjs.org'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/properties/:id' component={DetailsPage} />
      <Route path='/checkout' component={Checkout} />
      {/* <Route path='/example' component={Example} /> */}
    </Router>
    //  <ToastContainer></ToastContainer>
  );
}

export default App;
