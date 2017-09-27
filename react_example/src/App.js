import React, { Component } from 'react';
import Logo from './Logo';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {searchKeyword: ''};
  }
  searchKeywordOnChange = (value) => {
    this.setState({
      searchKeyword: value
    });
  }
  searchButtonOnClick = () => {
    alert(this.state.searchKeyword);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo size='big'/>
          <h2>Welcome to React, Redux, Seminar</h2>
        </div>
        <p className="App-intro">
          To get started, type something to the box.
        </p>
        <p>
          Current keyword is {this.state.searchKeyword}
        </p>
        <SearchBox
          onChange={this.searchKeywordOnChange}
          onSearch={this.searchButtonOnClick}
        />
      </div>
    );
  }
}

export default App;
