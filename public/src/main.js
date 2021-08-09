const eLocationInput = document.querySelector('#location');
const eLocationOuput = document.querySelector('#location-output');
const eImg = document.querySelector('img');
const eDescription = document.querySelector('#description');
const eTemperature = document.querySelector('#temperature');
const eWind = document.querySelector('#wind');
const ePrecip = document.querySelector('#precip');
const ePressure = document.querySelector('#pressure');
document.querySelector('#checkBtn').addEventListener('click', onCheckBtnClick);
function onCheckBtnClick() {
    eLocationOuput.innerText = 'Loading...';
    eDescription.innerText = '-';
    eTemperature.innerText = '-';
    eWind.innerText = '-';
    ePrecip.innerText = '-';
    ePressure.innerText = '-';
    fetch(`http://localhost:3000/weather?location=${encodeURI(eLocationInput.value)}`).then(response => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
            }
            else {
                eLocationOuput.innerText = `${data.location.name} - ${data.location.country}`;
                const dc = data.current;
                eImg.src = dc.weather_icons[0];
                eDescription.innerText = dc.weather_descriptions[0];
                eTemperature.innerHTML = dc.temperature + ' &deg;C';
                eWind.innerText = dc.wind_speed;
                ePrecip.innerText = dc.precip;
                ePressure.innerText = dc.pressure;
            }
        });
    });
}
//# sourceMappingURL=main.js.map