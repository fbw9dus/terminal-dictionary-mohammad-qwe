const axios = require('axios')

var language = 'en-gb'
var word_id = process.argv[2]
var fields = 'pronunciations'
var strictMatch = 'false'

url =  `https://od-api.oxforddictionaries.com/api/v2/entries/${language}/` + word_id + '?fields=' + fields + '&strictMatch=' + strictMatch
axios.get(url, {
    headers: {
                "app_id": "3c439d21",
                "app_key": "76c6c79c707e8b2b44953089743fcbdb"
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  }); 


  