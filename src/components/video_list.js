/*
* @Author: Isha Potnis
* @Date:   2017-09-30 19:59:38
* @Last Modified by:   Isha Potnis
* @Last Modified time: 2017-12-27 15:13:26
*/
/*
REACT NOTES :classname to avoid conflict with class keyword.
*/
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				onVideoSelect = {props.onVideoSelect}
				key = {video.etag} 
				video={ video } />
		);
	});
	return (
		<ul className = "col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;