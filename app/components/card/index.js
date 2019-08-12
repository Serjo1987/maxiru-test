import React,  { Component }       from 'react';
import         { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import         { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export default class Card extends Component {
  render() {
    const classList = classes => {
      return Object
        .entries(classes)
        .filter(entry => entry[1])
        .map(entry => entry[0])
        .join(' ');
    };
    
    const generateTime = () => {
      let buttons = [];

      for (let i = 11; i < 23; i++) {
        buttons.push(<a href="#" data-time={i}>{i}:00</a>);
      }

      return buttons;
    };

    return (
			<div className="card">
        <div className="percents-nav flex flex-content-between flex-align-items-center">
          <div>
            <span
              className={
                classList({
                  '_grey': this.props.value <= 10,
                  '_green': this.props.value > 10 && this.props.value <= 30,
                  '_yellow': this.props.value > 30 && this.props.value <= 60,
                  '_orange': this.props.value > 60 && this.props.value <= 70,
                  '_red': this.props.value > 70 && this.props.value <= 100
                })
              }
            >{this.props.value}</span>
            <span>%</span>
          </div>	
          <a href="#">
            <FontAwesomeIcon icon={faEllipsisV} />
          </a>
        </div>
        <div className="time-list flex flex flex-content-around flex-wrap flex-align-items-center">
          { generateTime() }
        </div>
      </div>
		);
	}
}