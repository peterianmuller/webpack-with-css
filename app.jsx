import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'jquery-ui';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:'peter'};
  }
  
  render() {
    console.log('hello');
  	return (
        <h1>Hello there world hi hi</h1>
  	)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

