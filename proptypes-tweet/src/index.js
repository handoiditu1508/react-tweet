import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tweet from "./Component/Tweet";

let testTweet = {
	message: "Something about cats.",
	gravatar: "avatar.png",
	author: {
		handle: "catperson",
		name: "IAMA Cat Person"
	},
	likes: 2,
	retweets: 5,
	timestamp: "2016-07-30 21:24:37"
};

ReactDOM.render(
	<Tweet tweet={testTweet}/>,
	document.getElementById('root')
);