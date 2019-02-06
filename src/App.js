import React, { Component } from 'react';
import './App.css';
import ChildOne from "./Components/childOne";
import ChildTwo from "./Components/childTwo";
import { Provider } from "react-redux";
import store from "./Ducks/store";

class App extends Component {
  render() {
    return (

      <Provider store={store} >


        <div className="App">
          <div>Does This work</div>
          <ChildOne />
          <ChildTwo />
        </div>
      </Provider>
    );
  }
}

export default App;
