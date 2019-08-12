import React,  { Component } from 'react';
import Card                  from '../card';

export default class Cards extends Component {
	render() {
		const generateCards = () => {
			let cards = [];

			for (let i = 0; i < 31; i++) {
				let value = Math.floor((Math.random() * 100) + 1);

				cards.push(<Card value={value} />);
			}

			return cards;
		};

		return (
			<div className="cards">
				<div className="cards-list">{ generateCards() }</div>
				<div className="cards-list">{ generateCards() }</div>
				<div className="cards-list">{ generateCards() }</div>
			</div>
		);
	}
}