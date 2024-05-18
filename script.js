let count = 0;
let history = {
    a: 123,
    b: 123,
    c: 123,
    d: 123,
    e: 123,
    f: 123
};
console.log('before: ')
console.log(history);

let weather = {
    apiKey: "b97e5c4f9b910fbc38bfe3ebf8f86020",
    fetchWeather: function (city, history) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data, history));
    },
    displayWeather: function (data, history) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        console.log(name, icon, description, temp, humidity, speed);

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temperature").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/hr.";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/? " + name + "')";


        if (count != 0 && count % 3 == 1) {
            document.getElementById('past_1').style.visibility = "visible";
            document.querySelector('.history1city').innerHTML = "Weather in " + history.a;
            document.querySelector('.history1icon').src = "https://openweathermap.org/img/wn/" + history.b + "@2x.png";
            document.querySelector('.history1description').innerText = history.c;
            document.querySelector('.history1temperature').innerText = history.d + "°C";
            document.querySelector('.history1humidity').innerText = "Humidity: " + history.e + " %";
            document.querySelector('.history1wind').innerText = "Wind speed: " + history.f + " km/hr.";
        }
        if (count != 0 && count % 3 == 2) {
            document.getElementById('past_2').style.visibility = "visible";
            document.querySelector('.history2city').innerHTML = "Weather in " + history.a;
            document.querySelector('.history2icon').src = "https://openweathermap.org/img/wn/" + history.b + "@2x.png";
            document.querySelector('.history2description').innerText = history.c;
            document.querySelector('.history2temperature').innerText = history.d + "°C";
            document.querySelector('.history2humidity').innerText = "Humidity: " + history.e + " %";
            document.querySelector('.history2wind').innerText = "Wind speed: " + history.f + " km/hr.";
        }
        if (count != 0 && count % 3 == 0) {
            document.getElementById('past_3').style.visibility = "visible";
            document.querySelector('.history3city').innerHTML = "Weather in " + history.a;
            document.querySelector('.history3icon').src = "https://openweathermap.org/img/wn/" + history.b + "@2x.png";
            document.querySelector('.history3description').innerText = history.c;
            document.querySelector('.history3temperature').innerText = history.d + "°C";
            document.querySelector('.history3humidity').innerText = "Humidity: " + history.e + " %";
            document.querySelector('.history3wind').innerText = "Wind speed: " + history.f + " km/hr.";
        }

        history.a = name;
        history.b = icon;
        history.c = description;
        history.d = temp;
        history.e = humidity;
        history.f = speed;
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value, history);
        count++;
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Pune", history);

// document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + "mumbai" +"')";