import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import checkUrl from './services/checkUrlService'

class SearchBar extends Component {

  state = {
    input_URL: "",
    current_title: ""
  };

  onChange = event => {
    this.setState({ input_URL: event.target.value })
    console.log(this)
  }

  onClick = event => {
    event.preventDefault();
    //
    if (!this.state.input_URL) {
      this.setState({ input_URL: event.target.value })
    }
    // Fetch data from input URL
    const responseText = this.fetchData()
    // Extract the title from the fetched site 
    responseText.then((resText) => {
      var parsedResponse = (new window.DOMParser()).parseFromString(resText, "text/html");
      const fetchedTitle = parsedResponse.getElementsByTagName("title")[0].innerHTML;
      this.setState({ current_title: fetchedTitle })
    }).then(() => {
      // Send the title to Back End
      const title = checkUrl.sendUrl(this.state.current_title)
      return title
      // Display the result
    }).then(title => this.setState({ current_title: title }))
  }

  async fetchData() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    var targetUrl = proxyUrl + this.state.input_URL
    var response = await fetch(targetUrl)
    var responseText = response.text()
    console.log('fetchData ', responseText)
    return responseText
  }

  render() {
    const root = {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '40px',
      width: '50%'
    } //400px};

    const iconButton = {
      padding: 10,
    }

    const input = {
      paddingLeft: "20px",
      flex: 1,
    }

    return (
      <React.Fragment>
        <Paper component="form" style={root} >
          <InputBase
            style={input}
            onChange={this.onChange}
            placeholder="Type a URL.."
            inputProps={{ 'aria-label': 'search url here' }}
          />
          <IconButton type="submit" onClick={this.onClick} onstyle={iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        {console.log(this.state)}
        <p> The title of the input URL is: </p>
        <p> {this.state.current_title === "" ? (this.state.current_title) : (this.state.current_title)}</p>

      </React.Fragment>
    )
  }
}

export default SearchBar;
