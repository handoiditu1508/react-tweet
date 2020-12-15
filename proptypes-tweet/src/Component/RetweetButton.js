import { Component } from "react";
import PropTypes from "prop-types";

class RetweetButton extends Component {
	render() {
		return (
			<span className="retweetbutton">
				<i className="fa fa-retweet" />
				<span className="retweet-count">
					{this.props.count ? this.props.count : null}
				</span>
			</span>
		);
	}
}

RetweetButton.propTypes = {
	count: PropTypes.number
};

export default RetweetButton;