const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const list = document.querySelector(".ajax-section .cities");
const apiKey = "1d873b30edaf261499ceccbd492cf2ff";

document.addEventListener("DOMContentLoaded", function () {
  window.setTimeout(function () {
    window.location.reload();
  }, 60000);
  const randomCity = ["Warsaw", "Lodz", "Berlin", "London", "New York"];
  for (let index = 0; index < 3; index++) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${
      randomCity[Math.floor(Math.random() * randomCity.length)]
    }&appid=${apiKey}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { main, name, sys, weather } = data;
        const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        let li = document.createElement("li");
        li.classList.add("city");
        const markup = `
            <h2 class="city-name" data-name="${name},${sys.country}">
              <span>${name}</span>
              <sup>${sys.country}</sup>
            </h2>
            <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
            <figure>
              <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
              <figcaption>${weather[0]["description"]}</figcaption>
            </figure>
          `;
        li.innerHTML = markup;
        list.appendChild(li);
      })
      .catch(() => {
        console.log("Error!");
      });
  }
});
