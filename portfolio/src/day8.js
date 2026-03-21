async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "ac3d8fd11965d49e93fb71c2dbb8334e";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("result").innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡️ Temp: ${data.main.temp} °C</p>
      <p>🌥️ Weather: ${data.weather[0].description}</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    console.log(error);
    alert("Error fetching data");
  }
}