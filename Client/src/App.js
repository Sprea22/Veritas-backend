import React, { Component } from 'react';
import './App.css';
import CustomizedInputBase from "./SearchBarComponent.js"
import FootBar from "./FootBar.js"


class App extends Component {
  
  render() {
    return( 
      <div style={{backgroundColor: "#282c34"}}>
      <header className="App-header">
        <CustomizedInputBase/>
      </header>

      <FootBar/>

      </div>
    )
  }
}

export default App;
