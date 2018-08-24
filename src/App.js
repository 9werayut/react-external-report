import React, { Component } from 'react';
import Counter from './components/counter';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

const appState = observable({
	count: 5
})

appState.increment = function() {
	this.count++;
}
appState.decrement = function() {
	this.count--;
}

class App extends Component {
  render() {
    return (
			<div style={{ marginTop: 50 }}>
				<DevTools />
				<Counter store={appState} />
			</div>
    );
  }
}

export default App;
