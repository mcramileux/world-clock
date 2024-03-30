function updateTime() {
    // Los Angeles
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");
        let losAngelesTime = moment().tz("America/Los_Angeles");

        losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
        losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]"
        );
    }

    // Sydney
    let sydneyElement = document.querySelector("#sydney");
    if (sydneyElement) {
        let sydneyDateElement = sydneyElement.querySelector(".date");
        let sydneyTimeElement = sydneyElement.querySelector(".time");
        let sydneyTime = moment().tz("Australia/Sydney");

        sydneyDateElement.innerHTML = moment().format("MMMM Do YYYY");
        sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]"
        );
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    // console.log(cityTimezone);
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    // console.log(cityTime.format("MMMM Do YYYY"));
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>

            <div class="time">
                ${cityTime.format("h:mm:ss")}
                    <small>
                        ${cityTime.format("A")}
                    </small>
            </div>
        </div>
    <a href="/">All cities</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);