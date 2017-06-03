class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      currentQuery: 'monkeys'
      
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  
  handleSearch(query) {
    this.setState({
      currentQuery: query
    });
    console.log(searchYouTube(query));
  }
  
  
  
  render() {
    
    return (
      <div>
        <Nav handleSearch={this.handleSearch} currentQuery={this.state.currentQuery}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData} handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
  
}
  

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
