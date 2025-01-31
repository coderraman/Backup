let inputBox = document.querySelector(".inputBox")
let temperature = document.querySelector(".temperature")
let description = document.querySelector(".description")
let search_Btn = document.querySelector(".search-Btn")

 
async function checkWether(city){
    const APIKEY = "a0954001fb69b1edd5634cbb974654c8"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`


    const weather_Data = await fetch(`${url}`).then(response => response.json())
    console.log(weather_Data);

}
search_Btn.addEventListener("click",()=>{
    checkWether(inputBox.value)
    // console.log("Hello World");
})
checkWether()