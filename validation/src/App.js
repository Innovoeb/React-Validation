import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Route} from "react-router-dom";
import File from "./Components/file-home.js";
import ThankYou from "./Components/thankyou.js";


const App = (props) => {

    return (
      <Router>
        <div>
          <Route exact path="/" component={File}/>
          <Route exact path="/thankyou" component={ThankYou}/>
        </div>
      </Router>
    );

}

export default App;
