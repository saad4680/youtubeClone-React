import React from 'react'


class Searchbar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			term: ''
		}
	}
	render(event){
		return(
				<div className="search-bar">
					<input type="text"
						 onChange={event => this.onInputChange(event.target.value)}
						 value={this.state.term}
						 />
				</div>
			)
	}
	onInputChange(term){
		this.setState({term})
		this.props.onSearchTermChange(term)
	}
}


export default Searchbar;