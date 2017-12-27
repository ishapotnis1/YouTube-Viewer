/* @Author: Isha Potnis
* @Date:   2017-09-30 19:58:13
* @Last Modified by:   Isha Potnis
* @Last Modified time: 2017-12-27 15:59:07
*/
//Search doesnot use React directly. But we include it as webpack converts JSX to React.createElement
import React ,{ Component } from 'react';
// same as const Component  = React.Com
//creating components with ES6 class - 
//1. functional component (info goes in, JSX is out)
//2. class component - internal record keeping -> Update some other components about the newly entered data

/*Class-based component  - added functionality*/
//render menthod with JSX syntax as return function

/*
Controlled element : Component whose value is changed by the state
*/

/* Constructor is used to initialize state. we define a parent constructor and set the state of 
defined object to given term*/
class SearchBar extends Component{
	constructor(props) {
		super(props);
		this.state = { term : '' };
	}
	render() {
		return (
			<div className = "search-bar">
				<input 
				value = {this.state.term}
				onChange = { event => this.onInputChange(event.target.value) } />
			</div>
		);
	}
	/*on change in input text,change event is called. setState causes value to be re-rendered and set to current state input value*/
	//pass the event handler to the element to be monitored
	//when we attach a handler, we add an event to the function 
	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
		//console.log(event.target.value);
	}
}

export default SearchBar;



/*EVENT HANDLERS::
Steps :
1.Declare an event handler
2. Pass the handler to monitor the events

STATE:: JS objects to record an event. Each class component has its own state that re-renders when state changes.
States present only in class based components.
Constructor -> only function called automatically when each instance created.
Each class based component has its own copy of state
*/