import { Component } from "react";
import PropTypes from "prop-types";

class LikeButton extends Component {
	render() {
		return (
			<span className="likebutton">
				<i className="fa fa-heart" />
				{this.props.count > 0 &&
					<span className="like-count">
						{this.props.count}
					</span>}
			</span>
		);
	}
}

LikeButton.propTypes = {
	count: PropTypes.number
};

export default LikeButton;