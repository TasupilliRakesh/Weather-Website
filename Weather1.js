const apikey="d1e8ce83f26055f873bdcdb65a2be528";
const apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather(city){
    const response= await fetch(apiURL +city+  `&appid=${apikey}`);


    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();
        console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +" %";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/2929/2929984.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/6974/6974833.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/2469/2469994.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/2675/2675876.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/4005/4005817.png"
    }


    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }



    
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})