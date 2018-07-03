const keys = require('./keys.js')
//console.log('keys ' + JSON.stringify(keys.twitterKeys, null, 2))

//require request package
var request = require('request')
//require twitter package
var Twitter = require('twitter');
var client = new Twitter(keys.twitterKeys);

var command = process.argv[2]
var value = process.argv[3]

switch(command){
  case `my-tweets`:
    console.log('tweet bird')
    twitterShowCase()
    break;
  case `spotify-this-song`:
    console.log('spotify fool')
    break;
  case `movie-this`:
    //console.log('value is ' + value)
    if(value == null){
      //console.log('val is null')
      value = 'Mr. Nobody'
      OMBDRequest()
    }
    else{
      OMBDRequest()
    }
    //console.log('this is movie info')
    break;
  case `do-what-it-says`:
    console.log('DO WHAT I SAY!!!')
    break;
}


//query twitter api with request
/*request('https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=crimshawrocks&count=5', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});*/


//40e9cece
//http://www.omdbapi.com/?apikey=40e9cece&t=titanic
//var params = {screen_name: 'crimshawrocks'};
function OMBDRequest(){
  request('http://www.omdbapi.com/?apikey=40e9cece&t=' + value, function(error, tweets, response) {
    if (!error) {
      console.log(JSON.parse(tweets.body));
    }
  });
}



function twitterShowCase(){
  var params = {
    screen_name: "crimshawrocks"
  };
  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log("");
        console.log(tweets[i].text);
      }
      //console.log('response ' + tweets.length)//JSON.stringify(tweets))
    }
  });
}
