import React,  { Component } from 'react';

export default class Calendar extends Component {
	render() {
		const generateMonth = () => {
			let dates = [];

			for (let i = 1; i < 32; i++) {
				dates.push(<div className="date">April, {i}</div>);
			}

			return dates;
		};

		return (
			<div className="calendar">
				{ generateMonth() }
			</div>
		);
	}
}