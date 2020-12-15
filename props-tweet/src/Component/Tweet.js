import { Component } from 'react';
import Avatar from "./Avatar";
import LikeButton from './LikeButton';
import Message from "./Message";
import MoreOptionsButton from './MoreOptionsButton';
import NameWithHandle from "./NameWithHandle";
import ReplyButton from './ReplyButton';
import RetweetButton from './RetweetButton';
import Time from './Time';

class Tweet extends Component{
	render(){
		return(
			<div className="tweet">
				<Avatar hash={this.props.tweet.gravatar}/>
				<div className="content">
					<NameWithHandle author={this.props.tweet.author}/>
					<Time time={this.props.tweet.timestamp}/>
					<Message text={this.props.tweet.message}/>
					<div className="buttons">
						<ReplyButton/>
						<RetweetButton count={this.props.tweet.retweets}/>
						<LikeButton count={this.props.tweet.likes}/>
						<MoreOptionsButton/>
					</div>
				</div>
			</div>
		);
	}
}
export default Tweet;