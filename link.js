// let weather=
// {
//     "apiKey":"c76648c1f062c2561ecd841390026e2e",
//     fetchWeather: function()
//     {
//         fetch("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=d07b8dfd3c6db2b3282ddd2503104427"
//         ).then((response)=>response.json())
//         .then((data)=>console.log(data));
//     },

//     displayWeather: function(data)
//     {
//        var temp = data.main.temp
//        console.log("temp",temp)
//         document.querySelector("#loc").innerText= "Weather in : "+name;
//         document.querySelector("#loc-left").innerText=name;
//         document.querySelector("#loc").src="https://openweathermap.org/img/wn/"+icon+".png"
//         document.querySelector("#desc").innerText=description;
//         document.querySelector("#temp").innerText= temp + "°C";
//         document.querySelector("#tempkol").innerText=temp +"°C";
//         document.querySelector("#Hum").innerText= "Humidity: "+humidity + "%";
//         document.querySelector("#Ws").innerText= "Wind Speed: "+speed + "kph";
//     },
//     search: function()
//     {
//         this.fetchWeather(document.querySelector("#place").value);
//     },
// };
// document.querySelector(".submit").addEventListener("click", function()
// {
//     weather.search();
// });

// document.querySelector("#place").addEventListener("keyup", function(event)
// {
//     if(event.key=="Enter")
//     {
//         weather.search();
//     }
// });

var onClick =()=>{
        var city = document.getElementById("place").value;
        fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=d07b8dfd3c6db2b3282ddd2503104427")
        .then((response)=>response.json())
        .then((data)=>{
            
            document.getElementById("loc-left").innerHTML = data.name; 
            var temp = data.main.temp
            var speed = data.wind.speed
            var main = data.weather[0].main
            document.getElementById("Hum").innerHTML = "Humidity : " + data.main.humidity + "%"
            document.getElementById("desc").innerHTML = main
            document.getElementById("Ws").innerHTML = "Wind Speed : "+speed +"M/s";
            document.getElementById("tempkol").innerHTML = temp +"&#176;C";
            document.getElementById("sr").innerHTML = "Minimum Temp : "+ data.main.temp_min +"&#176;C";
            document.getElementById("st").innerHTML = "Maximum Temp : "+data.main.temp_max +"&#176;C";
            var image = document.getElementById("icon")
            image.src="https://openweathermap.org/img/wn/"+data.weather[0].icon +".png"
        
        }
        )


}