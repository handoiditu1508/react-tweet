const { Component } = require("react");

class NameWithHandle extends Component{
	render(){
		return(
			<span className="name-with-handle">
				<span className="name">Your name</span>
				<span className="handle">@yourhandle</span>
			</span>
		);
	}
}
export default NameWithHandle;