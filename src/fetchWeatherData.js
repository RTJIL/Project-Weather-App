async function fetchWeatherData(location) {
  const loadingEl = document.getElementById('loading');
  const weatherDataEl = document.querySelector('.weather-data');
  const iconMap = {
    'clear-day': '☀️',
    'clear-night': '🌕',
    'partly-cloudy-day': '⛅',
    'partly-cloudy-night': '🌤️',
    cloudy: '☁️',
    rain: '🌧️',
    snow: '❄️',
    thunderstorm: '⛈️',
    fog: '🌫️',
  };

  try {
    loadingEl.classList.remove('hidden');
    const apiKey = 'JP7FZXSQJCRDQ235F3PCLMP99';
    // const encodedLocation = encodeURIComponent(location.trim());
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}`;

    const response = await fetch(url, { mode: 'cors' });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    const iconCode = data.currentConditions.icon;
    const iconEmoji = iconMap[iconCode] || '❓';
    document.getElementById('weather-icon').textContent = iconEmoji;

    weatherDataEl.classList.remove('hidden');
    loadingEl.classList.add('hidden');
    console.log(data);
    return data;
  } catch (e) {
    console.error('❌Fetch failed:', e.message);
    throw new Error('Something Went Wrong');
  }
}

export { fetchWeatherData };
