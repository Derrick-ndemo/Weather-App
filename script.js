const apiUrl =
    "https://api.weatherapi.com/v1/current.json?key=783c83f3d03a4896982214648240205&q=";

const search = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const icon = document.querySelector('.weather-icon')


// checkweather
async function checkWeather(city) {
    try {

        const response = await fetch(apiUrl + city);
        const data = await response.json();
    
        console.log(data);
        document.querySelector('.weather').style.display = 'block';
    
        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + '°C';
        document.querySelector(".humidity").innerHTML = data.current.humidity + '%';
        document.querySelector(".wind").innerHTML = data.current.wind_kph + 'km/h';
    
        icon.src = data.current.condition.icon
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
    }
    catch(err) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(search.value);
}).

checkWeather();
