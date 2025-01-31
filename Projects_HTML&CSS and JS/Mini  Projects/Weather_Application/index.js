const APIKey = "a0954001fb69b1edd5634cbb974654c8";
const APIurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputValue = document.querySelector(".InputValue");
const SearchButton = document.querySelector("#search-Btn");

async function checkWeather(CityName) {
  const response = await fetch(APIurl + CityName + `&appid=${APIKey}`);
  var data = await response.json();
//   console.log(data);

  document.querySelector(".CityName").innerHTML = data.name;
  document.querySelector(".Temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humaditiy").innerHTML = data.main.humidity + "%";
  document.querySelector(".Wind").innerHTML = data.wind.speed + " " + "km/h";
}
SearchButton.addEventListener("click", () => {
  checkWeather(inputValue.value);
  document.querySelector(".InputValue").value = "";
});