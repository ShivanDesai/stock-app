import React, {Component} from 'react';
import logo from './logo.svg';
import Card from './Card';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      company: null,
      data: null,
      loading: false
    }
  }

  textChange = (event) => {
    this.setState({
      company: event.target.value
    });
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.search();
    }
  }

  search = () => {
    this.setState({loading: true})
    fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + this.state.company + '&apikey=AB0S56A1MM9T586F')
      .then(response => response.json())
      .then(data => {this.setState({data: data, loading: false});console.log(data)});
  }

  render(){
    return (
      <div className="App">
          <input id="searchBar" type="text" onChange={this.textChange} placeholder="Enter a company Stock Symbol..." onKeyDown={this.handleKeyDown} /><br/><br/><br/>
          <button style={{height: '50px', width: '100px', fontWeight: 'bold' }} onClick={this.search}>Search</button><br/>
          {this.state.loading && <img src={logo} className="App-logo" alt="logo" />}
          {!this.state.loading && <Card data={this.state.data} />}
      </div>
    );
  }
}

export default App;
