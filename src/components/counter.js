import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';


@observer
export default class Counter extends React.Component {

	render(){
		return(
			<div>
				Counter: {this.props.store.count}
				<button onClick={this.handleInc}> + </button>
				<button onClick={this.handleDec}> - </button>
			</div>
		)
	}
	handleInc = () => {
		this.props.store.increment(1);
	}
	handleDec = () => {
		this.props.store.decrement();
	}
}
