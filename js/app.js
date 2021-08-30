const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function () {
    const inputField = document.getElementById('search-field').value;
    const apiKey = '737e6c45d2b50ac980815d41e1bea873';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField}&appid=${apiKey}`
    fetch(url)
        .then(res => res.json())
        .then(data => showWeather(data))
})

showWeather = weather => {
    const container = document.getElementById('container')
    const temperature = ((weather.main.temp ) - 273.15)
    container.textContent = ''
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${weather.name},${weather.sys.country}</h3>
        <h2><span>${Math.round(temperature)}</span>&deg;C | <span>${Math.round(temperature) * 1.8 + 32}</span>&deg;F</h2>
        <p class="mb-0">Temperature Range : ${Math.round((weather.main.temp_max)-273.15)}<span>&deg;C</span> / ${Math.round((weather.main.temp_min)-273.15)}<span>&deg;C</span></p>
        <img src='http://openweathermap.org/img/w/${weather.weather[0].icon}.png'/> | <span> | ${weather.weather[0].description}</span>
        <p class="mb-0">Humidity : ${weather.main.humidity}%</p>
        <p class="mb-0">Wind deg : ${weather.wind.deg}<span>&deg;C</span></p>
        <p class="mb-0">Wind speed : ${weather.wind.speed} km/h</p>
    `
    container.appendChild(div)
    console.log(weather)
}
