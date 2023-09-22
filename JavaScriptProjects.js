//WEATHER APPLICATION SYNTAX

const apiKey = "8d3c85f36b1326b0c37148a3fb559b0e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°F";
    document.querySelector(".city").innerHTML = data.name;
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

