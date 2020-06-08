import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Search_bar from "./components/search_bar";
import VideoList from "./components/preview_list";
import VideoDetail from "./components/video_detail";
import YoutubeSearch from "youtube-api-search";


const API_KEY="AIzaSyDy8YEzgsfmcpfxfL_0g-VMjXnctmFicWo"



//create a component named App which is a function that return JSX, using babel,
//it will be transcompiled to vanilla js
// const App = () => {
//   return <div>
//     <Search_bar/>
//   </div>;
// }
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      searched_videos: [],
      selectedVideo: null
    };
    
    //initialize state with an initialized search using the API
    this.videoSearch('asmr');
  }

  videoSearch(term){
    YoutubeSearch( {key: API_KEY, term: term}, (videos) => {
      this.setState(
        {
          searched_videos: videos,
          selectedVideo: videos[0]
        }
        );
    });
  }

  render(){
    return (
    <div>
      <Search_bar onSearchBarChange={term=>this.videoSearch(term)}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList 
      onVideoSelect={selectedVideo => this.setState({selectedVideo})}
      videos={this.state.searched_videos}/>
    </div>
    );
  }
  
}

//render (put the component generated html into page/ DOM) the component
ReactDOM.render(<App />, document.querySelector(".container"));