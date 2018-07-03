const keys = require('./keys.js')
//console.log('keys ' + JSON.stringify(keys.twitterKeys, null, 2))

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
