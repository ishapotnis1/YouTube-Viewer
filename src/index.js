/*
* @Author: Isha Potnis
* @Date:   2017-09-29 21:05:03
* @Last Modified by:   Isha Potnis
* @Last Modified time: 2017-12-27 16:09:25
*/
import _ from 'lodash';
import ReactDOM from 'react-dom'; // interact with actual DOM
import React, { Component }from 'react'; //create components
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//console.developers.google.com
const API_KEY = 'AIzaSyCn9k0tOYS2fI81HU1EjZi-8X5tNeEMo50';

//Create new component to produce some HTML
/*const App = () => {
	return <div>Hi!!!</div>;
}//ES6 syntax*/

//ALWAYS 1 COMPONENT PER FILE :::::

/*REACT NOTES::
const is an ES6 concept similar to var -> meaning it is not going to change..
JSX is a subset of Javascript that allows to write HTML in js
We created a class. Now we create an instance of the class by enclosing it in JSX tags and use it.

DOWNWARDS DATA FLOW: Only parent component should be responsible to fetch the data.
*/
class App extends Component { //ES6 syntax for function 
	constructor(props) {
		super(props);
		this.state = { videos: [],
			selectedVideo:null
		 };
		 this.videoSearch('Isha Potnis');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
				onVideoSelect = { selectedVideo => this.setState({selectedVideo}) } 
				videos = { this.state.videos } />
			</div>
		);
	}
}
//Sign-up for youtube API key
/*On event click.. pass function from app-> video list-> video list item*/

//package to make searching easier
/*Different components in function for different applications*/
//Take the HTML component generated by JSX and render it in browser DOM
//React is differentiated into 2 separate libraries. The task to show HTML component on the browser is the part of react-dom library.
/*React knows how to render the objects and nestle/join them together*/
ReactDOM.render(<App/>,  document.querySelector('.container'));