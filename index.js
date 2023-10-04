const API_KEY = `bd5e378503939ddaee76f12ad7a97608`
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");



const getWeather = async(city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
   return getData(data)

}

const getData = (data)=>{
    weather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="cloud">
    </div>
    <div>
        <h2>${data.main.temp}℃</h2>
        <h4> ${data.weather[0].description} </h4>
    </div>
    `
}

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    getWeather(search.value)
})


