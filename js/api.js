const apiKey = '29dab5535986a9310f7d508b8a1c9134';
const lat = '-34.6037'; // Latitud de Buenos Aires
const lon = '-58.3816'; // Longitud de Buenos Aires

document.addEventListener('DOMContentLoaded', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temperatura = data.main.temp;
            const clima = data.weather[0].description;
            const humidity = data.main.humidity;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('clima').textContent = clima;
            document.getElementById("humidity").textContent = data.main.humidity;
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});
