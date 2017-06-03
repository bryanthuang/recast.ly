var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {'maxResults': 5,
      'part': 'snippet',
      'q': options,
      'type': 'video',
      'key': YOUTUBE_API_KEY
    },
    success: function(data) {
      console.log('query: ', options);
      callback(data.items);
    }
  });  
};

window.searchYouTube = searchYouTube;
