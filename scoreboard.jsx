// class
//Make component called application that returns a single DOM element.
//Components should be uppercase
//add props param so we can get properties sent by the component rendering this component

//the app wors. but its big. and its no better than if we just copy and pasted it into our html file. It it gets any bigger ,we are in big trouble because we have to manage both jsx and html.
//lets break up the app into components
//1.header
//2.multiple teams
//3.each team has a counter

// Props are immutable. They do not change.
//State is simply a peice of data that DOES change.
// state has:
// 1. an initial value
// 2. (Infinite number of)  changed values

// In the case of the NL East, all gamesback state at 0
// some kind of mutation occurs(namely, someone loses or wins a game)

// In ES5 to use state, react provides a component for us to use.
// It takes an object as a param.
//ANYTIME STATE CHANGES...THE COMPONENT WILL RE-RENDER- THE HEART OF REACT

var teams = [
	{
		name: "Braves",
		gamesBack: 0,
		city: "Atlanta"
	},
	{
		name: "Nationals",
		gamesBack: 0,
		city: "Washington D.C."
	},
	{
		name: "Marlins",
		gamesBack: 0,
		city: "Miami"
	},
	{
		name:"Mets",
		gamesBack:0,
		city: "New York"
	},
	{
		name:"Phillies",
		gamesBack:0,
		city:"Philadeliphia"
	}
]

function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)
}
//create a new component called TEAM to be used by application.
//we can use it twice with props
function Application(props){
	return(
		// use map to loop through the teams array.
		// we no longer need:
		// <Team name="Braves"  score="0"/>
		// <Team name="Brewers"  score="0"/>
		// props.team is an array, with team objects.
		// send team the team object, in map, ES6 style.
		<div className="container">
			<Header title={props.title} />
			{props.teams.map((team,index)=>{
				return <Team key={index} name={team.name} gamesBack={team.gamesBack} city={team.city} />
			})}
		</div>
	)
}
function Team(props){
	return(
			<div className="row">
				<div className="col-sm-8 col-sm-offset-2 team">
					<div className="team-name col-sm-12">{props.city} {props.name} </div>
						<Counter gamesBack={props.gamesBack} />
				</div>
			</div>
	)
}
// var with the name of the Component
//the only required property is render
//can make decisions. the dom has to change based on if someone selects a  plus or minus.
var Counter= React.createClass({
	render: function(){
		//back to the good old days...
		return(
			<div class="counter">
				<button className="btn btn-success">+</button>
				<div className="gamesBack">games-back will go here</div>
				<button className="btn btn-danger">-</button>
			</div>
		)
	}

})


//Add a prop to send the title to the Application component.
ReactDOM.render(
 	// <h1>Hello, world!</h1>,
 	<Application title="Braves Scoreboard" teams={teams} />,
  document.getElementById('root')
  )