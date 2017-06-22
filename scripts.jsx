// Our First Component-
function Application(){
	//this is a comment
	var name="porscha";
	console.log(React);
	return(
		<div id="parent">
			<div class="sibling">
				<h1>Hello, World!</h1>
				<Message name="Shane" gender="M"/>
				<Message name="Carla"/>
				<Message name="Nick" />
				<Message  name="Hayes"/>
			</div>
			<div class="sibling">
				<h2>From {name}</h2>
			</div>
		</div>
		)
}

function Message(props){
	return(
		<div>
			<h1>Hello,{props.name}. Gender: {props.gender}</h1>
		</div>
		)
}
//ReactDOM is available beacause we included reactDOM.js.
// The .render function needs REACT(react.js) and takes 2 arguements.
// 1. the component to render() {
// 2. where to render it.
// When REACTDOM.render runs it will OWN that element.
// }
ReactDOM.render(
 	// <h1>Hello, world!</h1>,
 	<Application />,
  	document.getElementById('container')
	)