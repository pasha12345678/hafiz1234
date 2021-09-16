const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://api.openweathermap.org/data/2.5/weather?q=narowal&appid=86f622d78734de92f5c98a0df01e1bfb')
  .then(function (response) {
    // handle success
    console.log(response.data.clouds.all);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });