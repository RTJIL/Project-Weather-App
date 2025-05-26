import './style.css';
import { fetchWeatherData } from './fetchWeatherData';

const form = document.querySelector('.check-form');
const weatherDataDiv = document.querySelector('.weather-data');
const placeName = document.querySelector('.place-name');
const temperature = document.querySelector('.temperature');
const extraInfo = document.querySelector('.extra-info');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent page reload
  const input = document.getElementById('location');
  const searchTerm = input.value.trim();

  if (!weatherDataDiv.classList.contains('hidden')) {
    weatherDataDiv.classList.add('hidden');
  } else {
    weatherDataDiv.classList.remove('hidden');
  }

  let weatherData = await fetchWeatherData(searchTerm);

  placeName.textContent = weatherData.address;
  temperature.textContent = `${weatherData.days[0].temp} °C `;
  extraInfo.textContent = `Feelslike: ${weatherData.days[0].feelslike}\n Solarradiation: ${weatherData.days[0].solarradiation}\n Conditions: ${weatherData.days[0].conditions}}`;
});

const go = 'dfsdf';
