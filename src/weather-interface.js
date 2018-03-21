export function Weather(city){
  // alert(city);
  $.ajax({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=30598242710b31a13b186fec41d7df3c`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
    },
    error: function() {
      $('#errors').text("There was an error processing your request. Please try again.")
    }
  });
}
