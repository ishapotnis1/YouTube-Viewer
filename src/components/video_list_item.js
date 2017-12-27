/*
* @Author: Isha Potnis
* @Date:   2017-09-30 19:59:17
* @Last Modified by:   Isha Potnis
* @Last Modified time: 2017-12-27 15:16:48
*/
import React from 'react';

const VideoListItem = ({ video ,onVideoSelect }) => { // ES6 syntax
	//const video = props.video;
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		<li onClick={() => onVideoSelect(video)} className = "list-group-item">
			<div className = "video-list media">
				<div className  = "media-left">
					<img className = "media-object" src={imageUrl}/>
				</div>

				<div className  = "media-body">
					<div className = "media-heading">
					{video.snippet.title}
					</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;