import './App.css';
import React from 'react';
import createReactClass from 'create-react-class';
import keydown from 'react-keydown';

const Terminal = keydown(createReactClass({
  getInitialState() {
    return { text: '' };
  },

  componentWillReceiveProps( nextProps ) {
    const { keydown: { event } } = nextProps;
    if (event) {
      this.setState( { text: event.which } );
    }
  },

  render() {
    return this.state.text;
  }
}))

function App() {
  let handleKeyPress = (event) => {
    console.log(event.key + ' was pressed!')
  };
  return (
    <div className="App">
      <Terminal/>
    </div>
  );
}

export default App;
