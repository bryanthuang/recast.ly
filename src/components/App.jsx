class App extends React.Component {
  constructor(props) {
    super(props);
    // searchYouTube('', this.callback);
    this.state = {
      currentVideo: exampleVideoData[0],
      currentQuery: '',
      currentVideoList: exampleVideoData
      
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.callback = this.callback.bind(this);

  }
  componentDidMount() {
    this.props.search('golden gate bridge', this.callback);
  }
  
  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  
  callback(response) {
    this.setState({
      currentVideoList: response,
      currentVideo: response[0]
    });
  }
  
  handleSearch(event) {
    var query = event.target.value;
    this.setState({
      currentQuery: event.target.value
    });
    this.props.search(query, this.callback);
  }
  
  
  
  render() {
    
    return (
      <div>
        <Nav currentQuery={this.state.currentQuery} handleSearch={this.handleSearch} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.currentVideoList} handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
  
}
  

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
