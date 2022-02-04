import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import bootstrap from "bootstrap";
import PropTypes from "prop-types";
import reactDom from "react-dom";
//include images into your bundle

//create your first component
const SimpleCounter = (props) => {
	return (
		<div className="containerCounter">
			<div className="calendar">
				<FontAwesomeIcon icon={faClock} id="clock" />
			</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
};

SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};

export default SimpleCounter;
