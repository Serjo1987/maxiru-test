import React,  { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<a href="/">
					<img src="/assets/img/logo.png" alt="logo" />
				</a>
			</div>
		);
	}
}