import {Component} from "react";

class Avatar extends Component{
	constructor(props){
		super(props);
		this.url = this.props.hash;
	}

	render(){
		return(
			<img src={this.url} className="avatar" alt="avatar"/>
		);
	}
}
export default Avatar;