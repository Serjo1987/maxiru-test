import React,  { Component } from 'react';

export default class Seats extends Component {
	render() {
		return (
			<div className="seats-container">
				<div className="seats">
					<div className="seat">
						<div className="number">1</div>
						<div className="description">VIP, 2 seats</div>
					</div>
					<div className="seat">
						<div className="number">2</div>
						<div className="description">standart, 3 seats</div>
					</div>
					<div className="seat">
						<div className="number">3</div>
						<div className="description">VIP, 2 seats</div>
					</div>
				</div>
			</div>
		);
	}
}