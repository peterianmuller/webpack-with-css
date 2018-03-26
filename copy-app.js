import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'jquery-ui';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:'peter'};
  }
  
  render() {
  	return (
      <div> 
        <h1>Hello world</h1>
        <h1>Hello there world</h1>
      </div>
  	)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

