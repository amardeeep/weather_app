const base_url = "http://api.weatherapi.com/v1";
const key = "7cf8712574364c31b7240901241405";
async function populate_dom(obj) {
  const display = document.querySelector(".display");
  dt = await obj;
  dt_current = dt.current;
  dt_location = dt.location;
  console.log(dt);
  for (const item in dt_current) {
    const div = document.createElement("div");
    div.innerHTML = item + ":" + dt_current[item];
    div.setAttribute("id", item);
    display.appendChild(div);
  }
}
async function weather_data_location(location) {
  const url = base_url + "/current.json?key=" + key + "&q=" + location;

  const weather_data = await fetch(url);
  const data = await weather_data.json();
  console.log(data);
  const wind_kph = data.current.wind_kph;
  const feels_like = data.current.feels_like;
  const humidity = data.current.humidity;
  const percipitation = data.current.percipitation;
  const current_time = data.location.current_time;
  const condition = data.condition;
  const country = data.location.country;
  const region = data.location.region;
  return data;
  /*return (dt = {
    country,
    region,
    wind_kph,
    feels_like,
    humidity,
    percipitation,
    current_time,
    condition,
  })*/
}
function create_form() {
  const div = document.getElementById("search_section");
  const form = document.createElement("form");
  const search_label = document.createElement("label");
  search_label.setAttribute("for", "city");
  search_label.innerHTML = "City:";
  const search = document.createElement("input");
  search.setAttribute("placeholder", "Example: London");
  search.setAttribute("type", "search");
  search.setAttribute("id", "city");
  search.setAttribute("name", "city");
  form.appendChild(search_label);
  form.appendChild(search);
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.innerHTML = "Go!";
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const fd = new FormData(form);
    for (item of fd) {
      populate_dom(weather_data_location(item));
    }
  });
  const celcius_btn = document.createElement("button");
  celcius_btn.addEventListener("click", function () {});
  const fahr_btn = document.createElement("button");
  fahr_btn.addEventListener("click", function () {});
  form.appendChild(button);
  div.appendChild(form);
}
create_form();
