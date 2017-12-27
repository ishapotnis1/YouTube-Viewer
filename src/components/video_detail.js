/*
* @Author: Isha Potnis
* @Date:   2017-09-30 19:58:49
* @Last Modified by:   Isha Potnis
* @Last Modified time: 2017-12-27 14:48:05
*/
import React from 'react';
//Template string - `another Es6 trick to avoid concatination of two strings`
const VideoDetail = ({video}) =>{
	if(!video){
		return <div>Loading......!!</div>
	}
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;