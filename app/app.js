import React,  { Component } from 'react';
import         { render    } from 'react-dom';

import Header   from './components/header';
import Seats    from './components/seats';
import Calendar from './components/calendar';
import Cards    from './components/cards';

class APP extends Component {
	componentDidMount() {
		let header   = document.getElementsByClassName('header')[0];
		let calendar = document.getElementsByClassName('calendar')[0];
		let seats    = document.getElementsByClassName('seats')[0];
		let seat     = document.getElementsByClassName('seat');
		let cards    = document.getElementsByClassName('cards')[0];
		let card     = document.getElementsByClassName('card')[0];

		let width  = window.innerWidth - seats.offsetWidth;
		let height = (header.offsetHeight + calendar.offsetHeight) + 17;

		cards.style.width    = width + 'px';
		calendar.style.width = width + 'px';
		cards.style.height   = 'calc(100vh - ' + height + 'px)';
		seats.style.height   = 'calc(100vh - ' + height + 'px)';

		for (let s of seat) {
			s.style.height = card.offsetHeight + 'px';
		}

		cards.onscroll = e => {
			if (e.currentTarget.scrollLeft > 0) calendar.scrollLeft = e.currentTarget.scrollLeft;
			else if (e.currentTarget.scrollLeft <= 0) calendar.scrollLeft = 0;

			if (e.currentTarget.scrollTop > 0) seats.scrollTop = e.currentTarget.scrollTop;
			else if (e.currentTarget.scrollTop <= 0) calendar.scrollTop = 0;
		};
	}

	render() {
		return(
			<div className="app">
				<Header />
				<div className="_content flex flex-content-start flex-align-items-start">
					<Seats />
					<div className="calendar-cards">
						<Calendar />
						<Cards />
					</div>
				</div>
			</div>
		);
	}
}

render((<APP />), document.getElementById('app'));