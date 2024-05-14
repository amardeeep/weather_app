const base_url = "http://api.weatherapi.com/v1";
const key = "7cf8712574364c31b7240901241405";

async function weather_data_location(location) {
  const url = base_url + "/current.json?key=" + key + "&q=" + location;

  const weather_data = await fetch(url);
  const data = await weather_data.json();
  const wind_kph = data.current.wind_kph;
  const feels_like = data.current.feels_like;
  const humidity = data.current.humidity;
  const percipitation = data.current.percipitation;
  const current_time = data.location.current_time;
  const condition = data.condition;
  const country = data.location.country;
  const region = data.location.region;
  return {
    country,
    region,
    wind_kph,
    feels_like,
    humidity,
    percipitation,
    current_time,
    condition,
  };
}
weather_data_location("Mumbai");