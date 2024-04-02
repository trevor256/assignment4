async function fetchWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = '3cd5cff03ad9f572b9dc5b0cef508a9f';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Weather data not found for the provided location');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
        document.getElementById('weatherInfo').innerText = 'Failed to fetch weather data.';
    }
}

function displayWeather(data) {
    const { main: { temp, feels_like }, weather } = data;
    const weatherDescription = weather[0].description;
    document.getElementById('weatherInfo').innerHTML = `
        <p>Temperature: ${temp} °C</p>
        <p>Feels Like: ${feels_like} °C</p>
        <p>Weather: ${weatherDescription}</p>
    `;
}
