import React, { Component } from 'react';
import './App.css';
import CustomizedInputBase from "./SearchBar.js"
import FootBar from "./FootBar.js"
import Axios from 'axios';


class App extends Component {
  
  /////// https://browntreelabs.com/scraping-sites-with-node/ //////
  componentDidMount() {
   Axios.get('https://www.realtor.com/news/real-estate-news/').then((response)=>{console.log(response)});
  }

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
