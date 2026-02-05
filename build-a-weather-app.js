const getWeatherBttn = document.getElementById("get-weather");
const cities = document.getElementById("cities");


async function getWeather(city){
  return fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
  .catch(error => console.error('Error:', error));
}

async function showWeather(city){
  try {
    let response = await getWeather(city);
    let data = await response.json();
    document.getElementById("location").textContent = data.name;
    document.getElementById("weather-icon").src = data.weather[0].icon;

    console.log(data);
  } catch (error) {
    console.log("Something went wrong, please try again later", error);
  }
}

getWeatherBttn.addEventListener("click", () => {
  if(cities.value){
    showWeather(cities.value)
  }
  })

// cities.addEventListener("change", () => console.log(cities.value))