import { Component } from "react";

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
export default RetweetButton;