const ApiUrl = "";
const Apikey = "";

const Inputvalue = document.querySelector(".InputValue").value;
const SearchButton = document.querySelector("#search-Btn");

async function getData(CityName) {
  const response = await fetch(ApiUrl + CityName + `&appid=${Apikey}`);

  var data = (await response).json();
  console.log(data);
}
getData();
