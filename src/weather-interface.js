export function Weather(city){
  let promise = new Promise(function(resolve, reject) {
     let request = new XMLHttpRequest();
     let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=30598242710b31a13b186fec41d7df3c
`;
     request.onload = function() {
       if (this.status === 200) {
         resolve(request.response);
       } else {
         reject(Error(request.statusText));
       }
     }
     request.open("GET", url, true);
     request.send();
   });

   promise.then(function(response) {
     let body = JSON.parse(response);
     $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
     $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
   }, function(error) {
     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
   });
}
