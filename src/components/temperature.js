import React from 'react';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class Temperature extends React.Component {

	@observable unit = "C";
	@observable temperatureCelsius = 25;

	@computed get temperatureKelvin(){
		console.log("calculation Kelvin")
		return this.temperatureCelsius * (9/5) +32;
	}
	@computed get temperatureFahrenheit() {
		console.log("calculation Fahenheit");
		return this.temperatureCelsius + 273.15
	}
	@computed get temperature() {
		console.log("calculation temperature");
		switch (this.unit) {
			case "K": return this.temperatureKelvin + "°K"
			case "F": return this.temperatureFahrenheit + "°F"
			case "C": return this.temperatureCelsius + "°C"
		}
	}
	render() {
		return (
			<div>
				{this.temperature}
			</div>
		)
	}
}
