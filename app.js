const keys = require('./keys.js')
//console.log('keys ' + JSON.stringify(keys.twitterKeys, null, 2))

//require request package
var request = require('request')
//require twitter package
var Twitter = require('twitter');


var command = process.argv[2]

switch(command){
  case `my-tweets`:
    console.log('tweet bird')
    break;
  case `spotify-this-song`:
    console.log('spotify fool')
    break;
  case `movie-this`:
    console.log('this is movie info')
    break;
  case `do-what-it-says`:
    console.log('DO WHAT I SAY!!!')
    break;
}


//query twitter api with request
request('https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=crimshawrocks&count=5', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

var client = new Twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  access_token_key: keys.access_token_key,
  access_token_secret: keys.access_token_secret
});
//40e9cece
//http://www.omdbapi.com/?apikey=40e9cece&t=titanic
var params = {screen_name: 'crimshawrocks'};
client.get('http://www.omdbapi.com/?apikey=40e9cece&t=titanic', function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
