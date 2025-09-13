//using ajax
//get appi data
  const API_KEY = '0d3ca973d9d4c9ad7050ab771e72f97e';
 function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  return $.ajax({
    url: url,
    method: 'GET',
    dataType: 'json',
  });
}
//get city based on input ad display input value
 function retrieve_input(){
  const cityy = document.getElementById("input").value;
  //display city 
    const p = document.getElementById("city_name")
  p.textContent = cityy
//get data for city and give the information to the html elements to display
 fetchWeather(cityy)
 .done(function (data) {
  //changes temprature background
    if(data.main.temp > 20){
    document.getElementById("display").style.backgroundColor = "Rgb(112, 44, 47)";//hot
  }else{
    document.getElementById("display").style.backgroundColor = "RGB(44, 51, 112)";//warm
  };
     $("#temp").text(`${Math.round(data.main.temp)}C`);
     $("#mood").text(data.weather[0].description);
     $("#feel").text(`feels like ${data.main.feels_like}C`);
     $("#min").text(`Min temperature: ${data.main.temp_min}C`);
     $("#max").text(`Max temperature: ${data.main.temp_max}C`);
     $("#wind").text(`Wind speed: ${data.wind.speed}Km/h, humidity: ${data.main.humidity}%`);
      const icon = data.weather[0].icon;;
   const iconurl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      $("#Icon").attr('src', iconurl);
    })
//fail to get data try again
    .fail(function (jqXHR, textStatus, errorThrown) {
      alert("Failed to retrieve data.Please check the city name and try again.");
    });
}
