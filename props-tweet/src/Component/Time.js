import {Component} from "react";
import moment from "moment";

class Time extends Component{
	render(){
		let timeString = moment(this.props.time).fromNow();

		return(
			<span className="time">{timeString}</span>
		);
	}
}
export default Time;