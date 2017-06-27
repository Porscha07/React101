import React, {Component} from 'react';

class SearchBar extends Component{
	render(){
		return(
			<form class="search-bar">
				<input type="text" placeholder="Search..." />
				<div>
					<input type="checkbox" /> &nbsp;Only show products in stock
				</div>
			</form>
		)
	}
}

export default searchbar;