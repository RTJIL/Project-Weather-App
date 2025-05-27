import './style.css';
import { fetchWeatherData } from './fetchWeatherData';
import { getLocation } from './getLocation';
import { liveInlineValidation } from './liveInlineValidation';

const getLoco = getLocation();

console.log(getLoco);

const form = document.querySelector('.check-form');
const weatherDataDiv = document.querySelector('.weather-data');
const placeName = document.querySelector('.place-name');
const temperature = document.querySelector('.temperature');
const extraInfo = document.querySelector('.extra-info');

const getLoc = document.querySelector('.get-loc');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const input = document.getElementById('location');
  const searchTerm = input.value.trim();

  if (!searchTerm) {
    liveInlineValidation();
    return;
  }

  // Optional: hide old data while loading new
  weatherDataDiv.classList.add('hidden');
  placeName.textContent = 'Loading...';

  try {
    const weatherData = await fetchWeatherData(searchTerm);

    placeName.textContent = weatherData.address;
    temperature.textContent = `${weatherData.days[0].temp} °C`;
    extraInfo.textContent = `Feels Like: ${weatherData.days[0].feelslike}°C\nSolar Radiation: ${weatherData.days[0].solarradiation}\nConditions: ${weatherData.days[0].conditions}`;

    weatherDataDiv.classList.remove('hidden'); // Show updated info
  } catch (error) {
    console.error(error);
    placeName.textContent = 'Could not fetch weather data 😢';
  }
});

getLoc.addEventListener('click', async (e) => {
  e.preventDefault(); // prevent page reload
  const searchTerm = getLocation();

  if (placeName.textContent !== null) {
    weatherDataDiv.classList.add('hidden');
  }

  if (searchTerm !== null) {
    let weatherData = await fetchWeatherData(searchTerm);
    placeName.textContent = weatherData.Address;
    temperature.textContent = `${weatherData.days[0].temp} °C `;
    extraInfo.textContent = `Feels Like: ${weatherData.days[0].feelslike}°C\n Solar Radiation: ${weatherData.days[0].solarradiation}\n Conditions: ${weatherData.days[0].conditions}`;
  } else {
    placeName.textContent = 'Give your loco';
  }
});
