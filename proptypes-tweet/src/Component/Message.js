import { Component } from "react";
import PropTypes from "prop-types";

class Message extends Component {
	render() {
		return (
			<div className="message">
				{this.props.text}
			</div>
		);
	}
}

Message.propTypes = {
	text: PropTypes.string
};

export default Message;