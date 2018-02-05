import React, { Component } from 'react';
import './App.css';
import IssueForm from './components/IssueForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>
          Report a problem with your delivery
        </h3>
        <IssueForm />
      </div>
    );
  }
}

export default App;
