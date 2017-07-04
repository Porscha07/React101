import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
 class Hello extends React.Component{
 	render(){
 		return <h1>Hello,{this.props.name}!</h1>
 	}
 }
// class Parent extends Component {
//   constructor(props){
//     super(props);
//   }
//   render(){
     
//     return (
//       <div> 
//         <h1>Hi Kids!</h1>
//         {this.props.children}
//       </div>
//     );
//   }
// }
// class App extends Component {
//   render(){
//     return(
//       <Parent>
//       <h2>These are the children!</h2>
//       </Parent>
//     );
//   }
// }


ReactDOM.render(
	<div>
		<h1> Welcome to our page!.</h1>
		<Hello name="porscha" />
	</div>,
	 document.getElementById('root')
); 
// registerServiceWorker();

// export default App; //allows app to be imported into other files.\
//state is passed via functions that can be called via props to other components.
//state is a moment of a 


