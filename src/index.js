import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import Searchbar from './components/search_bar';
import VideoDetail from './components/video_detail'


// Create a new component, this component should produce some html
// some HTML
const apiKey = 'AIzaSyBpCrz-JI6ei62FIV9oZ8r0pt31Q3mSagY';



class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null

		}
		this.videoSearch('surfboards');
		


	}
	videoSearch(term){
		YTSearch({key: apiKey, term: term}, (res) => {
			this.setState({
				videos: res,
				selectedVideo: res[0]		
			})
		})

	}
	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500)
	return(
			<div>
				<Searchbar onSearchTermChange={videoSearch}/>
				<VideoDetail 
					video={this.state.selectedVideo}
				/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}
				/>
			</div>



		)
	}



}
ReactDOM.render(<App />, document.getElementById('main'))






















// Take this component generated HTML and put it 
// on the page in the DOM