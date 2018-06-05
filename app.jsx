import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'jquery-ui';
import './main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'juancito' };
  }

  render() {
    console.log('hello');
    return <h1>Hello there {this.state.name}</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
