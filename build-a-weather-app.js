const getWeatherBttn = document.getElementById("get-weather-btn");
const cities = document.getElementById("cities");


async function getWeather(city) {
  try {
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
    if (!response.ok)
      throw new Error(`Weather information for city '${city}' not found.`);
    let data = response.json();
    return data;
  } catch (error) {
    console.log(error)
    alert("Something went wrong, please try again later")
    return 1
  }
}


async function showWeather(city){
    let data = await getWeather(city);
    document.getElementById("location").textContent = data.name;
    document.getElementById("weather-icon").src = data.weather[0].icon;
    document.getElementById("main-temperature").textContent = `${data.main.temp} ° C`;
    document.getElementById("feels-like").textContent = `${data.main.feels_like} ° C`;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `Wind speed: ${data.wind.speed} m/s`;
    if(!data.wind.gust){
      document.getElementById("wind-gust").textContent = "N/A";
    }else{
      document.getElementById("wind-gust").textContent = `Gusts: ${data.wind.gust} m/s`;
    }
    document.getElementById("weather-main").textContent = data.weather[0].main;
}

getWeatherBttn.addEventListener("click", () => {
  if(cities.value){
    showWeather(cities.value)
  }
  })
