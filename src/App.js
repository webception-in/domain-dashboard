import React, { Component } from 'react';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Domain Dashboard</h1>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
