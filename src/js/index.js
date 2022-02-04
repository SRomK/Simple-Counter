//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/SimpleCounter.css";
import bootstrap from "bootstrap";
//import your own components
import SimpleCounter from "./component/SimpleCounter.jsx";

//render your react application
let counter = 0;

setInterval(function () {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(four, three, two, one);
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitOne={three}
			digitOne={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
