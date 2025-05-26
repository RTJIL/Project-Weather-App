async function fetchWeatherData(location) {
  try {
    const apiKey = 'JP7FZXSQJCRDQ235F3PCLMP99';
    const encodedLocation = encodeURIComponent(location.trim());
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedLocation}?unitGroup=metric&key=${apiKey}`;

    const response = await fetch(url, { mode: 'cors' });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;

  } catch (e) {
    console.error('❌Fetch failed:', e.message);
    throw new Error('Something Went Wrong');
  }
}

export { fetchWeatherData };
