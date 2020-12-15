import { Component } from "react";
import PropTypes from "prop-types";

class NameWithHandle extends Component {
	render() {
		const { name, handle } = this.props.author;

		return (
			<span className="name-with-handle">
				<span className="name">{name}</span>
				<span className="handle">@{handle}</span>
			</span>
		);
	}
}

NameWithHandle.propTypes = {
	author: PropTypes.shape({
		name: PropTypes.string.isRequired,
		handle: PropTypes.string.isRequired
	}).isRequired
};

export default NameWithHandle;