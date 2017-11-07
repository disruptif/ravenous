import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {businesses: []};
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses =>
      {
        this.setState({businesses: businesses});
      });
    }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/> {/*searchYelp is an event handler, we pass this function to the stateless SearchBar component*/}
        <BusinessList businesses={this.state.businesses}/> {/*update the state of the sibling component*/}
      </div>
    );
  }
}

export default App;
