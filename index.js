const base_url = "http://api.weatherapi.com/v1";
const key = "7cf8712574364c31b7240901241405";
const JSON_string =
  '[\n\t{\n\t\t"code" : 1000,\n\t\t"day" : "Sunny",\n\t\t"night" : "Clear",\n\t\t"icon" : 113\n\t},\n\t{\n\t\t"code" : 1003,\n\t\t"day" : "Partly cloudy",\n\t\t"night" : "Partly cloudy",\n\t\t"icon" : 116\n\t},\n\t{\n\t\t"code" : 1006,\n\t\t"day" : "Cloudy",\n\t\t"night" : "Cloudy",\n\t\t"icon" : 119\n\t},\n\t{\n\t\t"code" : 1009,\n\t\t"day" : "Overcast",\n\t\t"night" : "Overcast",\n\t\t"icon" : 122\n\t},\n\t{\n\t\t"code" : 1030,\n\t\t"day" : "Mist",\n\t\t"night" : "Mist",\n\t\t"icon" : 143\n\t},\n\t{\n\t\t"code" : 1063,\n\t\t"day" : "Patchy rain possible",\n\t\t"night" : "Patchy rain possible",\n\t\t"icon" : 176\n\t},\n\t{\n\t\t"code" : 1066,\n\t\t"day" : "Patchy snow possible",\n\t\t"night" : "Patchy snow possible",\n\t\t"icon" : 179\n\t},\n\t{\n\t\t"code" : 1069,\n\t\t"day" : "Patchy sleet possible",\n\t\t"night" : "Patchy sleet possible",\n\t\t"icon" : 182\n\t},\n\t{\n\t\t"code" : 1072,\n\t\t"day" : "Patchy freezing drizzle possible",\n\t\t"night" : "Patchy freezing drizzle possible",\n\t\t"icon" : 185\n\t},\n\t{\n\t\t"code" : 1087,\n\t\t"day" : "Thundery outbreaks possible",\n\t\t"night" : "Thundery outbreaks possible",\n\t\t"icon" : 200\n\t},\n\t{\n\t\t"code" : 1114,\n\t\t"day" : "Blowing snow",\n\t\t"night" : "Blowing snow",\n\t\t"icon" : 227\n\t},\n\t{\n\t\t"code" : 1117,\n\t\t"day" : "Blizzard",\n\t\t"night" : "Blizzard",\n\t\t"icon" : 230\n\t},\n\t{\n\t\t"code" : 1135,\n\t\t"day" : "Fog",\n\t\t"night" : "Fog",\n\t\t"icon" : 248\n\t},\n\t{\n\t\t"code" : 1147,\n\t\t"day" : "Freezing fog",\n\t\t"night" : "Freezing fog",\n\t\t"icon" : 260\n\t},\n\t{\n\t\t"code" : 1150,\n\t\t"day" : "Patchy light drizzle",\n\t\t"night" : "Patchy light drizzle",\n\t\t"icon" : 263\n\t},\n\t{\n\t\t"code" : 1153,\n\t\t"day" : "Light drizzle",\n\t\t"night" : "Light drizzle",\n\t\t"icon" : 266\n\t},\n\t{\n\t\t"code" : 1168,\n\t\t"day" : "Freezing drizzle",\n\t\t"night" : "Freezing drizzle",\n\t\t"icon" : 281\n\t},\n\t{\n\t\t"code" : 1171,\n\t\t"day" : "Heavy freezing drizzle",\n\t\t"night" : "Heavy freezing drizzle",\n\t\t"icon" : 284\n\t},\n\t{\n\t\t"code" : 1180,\n\t\t"day" : "Patchy light rain",\n\t\t"night" : "Patchy light rain",\n\t\t"icon" : 293\n\t},\n\t{\n\t\t"code" : 1183,\n\t\t"day" : "Light rain",\n\t\t"night" : "Light rain",\n\t\t"icon" : 296\n\t},\n\t{\n\t\t"code" : 1186,\n\t\t"day" : "Moderate rain at times",\n\t\t"night" : "Moderate rain at times",\n\t\t"icon" : 299\n\t},\n\t{\n\t\t"code" : 1189,\n\t\t"day" : "Moderate rain",\n\t\t"night" : "Moderate rain",\n\t\t"icon" : 302\n\t},\n\t{\n\t\t"code" : 1192,\n\t\t"day" : "Heavy rain at times",\n\t\t"night" : "Heavy rain at times",\n\t\t"icon" : 305\n\t},\n\t{\n\t\t"code" : 1195,\n\t\t"day" : "Heavy rain",\n\t\t"night" : "Heavy rain",\n\t\t"icon" : 308\n\t},\n\t{\n\t\t"code" : 1198,\n\t\t"day" : "Light freezing rain",\n\t\t"night" : "Light freezing rain",\n\t\t"icon" : 311\n\t},\n\t{\n\t\t"code" : 1201,\n\t\t"day" : "Moderate or heavy freezing rain",\n\t\t"night" : "Moderate or heavy freezing rain",\n\t\t"icon" : 314\n\t},\n\t{\n\t\t"code" : 1204,\n\t\t"day" : "Light sleet",\n\t\t"night" : "Light sleet",\n\t\t"icon" : 317\n\t},\n\t{\n\t\t"code" : 1207,\n\t\t"day" : "Moderate or heavy sleet",\n\t\t"night" : "Moderate or heavy sleet",\n\t\t"icon" : 320\n\t},\n\t{\n\t\t"code" : 1210,\n\t\t"day" : "Patchy light snow",\n\t\t"night" : "Patchy light snow",\n\t\t"icon" : 323\n\t},\n\t{\n\t\t"code" : 1213,\n\t\t"day" : "Light snow",\n\t\t"night" : "Light snow",\n\t\t"icon" : 326\n\t},\n\t{\n\t\t"code" : 1216,\n\t\t"day" : "Patchy moderate snow",\n\t\t"night" : "Patchy moderate snow",\n\t\t"icon" : 329\n\t},\n\t{\n\t\t"code" : 1219,\n\t\t"day" : "Moderate snow",\n\t\t"night" : "Moderate snow",\n\t\t"icon" : 332\n\t},\n\t{\n\t\t"code" : 1222,\n\t\t"day" : "Patchy heavy snow",\n\t\t"night" : "Patchy heavy snow",\n\t\t"icon" : 335\n\t},\n\t{\n\t\t"code" : 1225,\n\t\t"day" : "Heavy snow",\n\t\t"night" : "Heavy snow",\n\t\t"icon" : 338\n\t},\n\t{\n\t\t"code" : 1237,\n\t\t"day" : "Ice pellets",\n\t\t"night" : "Ice pellets",\n\t\t"icon" : 350\n\t},\n\t{\n\t\t"code" : 1240,\n\t\t"day" : "Light rain shower",\n\t\t"night" : "Light rain shower",\n\t\t"icon" : 353\n\t},\n\t{\n\t\t"code" : 1243,\n\t\t"day" : "Moderate or heavy rain shower",\n\t\t"night" : "Moderate or heavy rain shower",\n\t\t"icon" : 356\n\t},\n\t{\n\t\t"code" : 1246,\n\t\t"day" : "Torrential rain shower",\n\t\t"night" : "Torrential rain shower",\n\t\t"icon" : 359\n\t},\n\t{\n\t\t"code" : 1249,\n\t\t"day" : "Light sleet showers",\n\t\t"night" : "Light sleet showers",\n\t\t"icon" : 362\n\t},\n\t{\n\t\t"code" : 1252,\n\t\t"day" : "Moderate or heavy sleet showers",\n\t\t"night" : "Moderate or heavy sleet showers",\n\t\t"icon" : 365\n\t},\n\t{\n\t\t"code" : 1255,\n\t\t"day" : "Light snow showers",\n\t\t"night" : "Light snow showers",\n\t\t"icon" : 368\n\t},\n\t{\n\t\t"code" : 1258,\n\t\t"day" : "Moderate or heavy snow showers",\n\t\t"night" : "Moderate or heavy snow showers",\n\t\t"icon" : 371\n\t},\n\t{\n\t\t"code" : 1261,\n\t\t"day" : "Light showers of ice pellets",\n\t\t"night" : "Light showers of ice pellets",\n\t\t"icon" : 374\n\t},\n\t{\n\t\t"code" : 1264,\n\t\t"day" : "Moderate or heavy showers of ice pellets",\n\t\t"night" : "Moderate or heavy showers of ice pellets",\n\t\t"icon" : 377\n\t},\n\t{\n\t\t"code" : 1273,\n\t\t"day" : "Patchy light rain with thunder",\n\t\t"night" : "Patchy light rain with thunder",\n\t\t"icon" : 386\n\t},\n\t{\n\t\t"code" : 1276,\n\t\t"day" : "Moderate or heavy rain with thunder",\n\t\t"night" : "Moderate or heavy rain with thunder",\n\t\t"icon" : 389\n\t},\n\t{\n\t\t"code" : 1279,\n\t\t"day" : "Patchy light snow with thunder",\n\t\t"night" : "Patchy light snow with thunder",\n\t\t"icon" : 392\n\t},\n\t{\n\t\t"code" : 1282,\n\t\t"day" : "Moderate or heavy snow with thunder",\n\t\t"night" : "Moderate or heavy snow with thunder",\n\t\t"icon" : 395\n\t}\n]';
const condition_json = JSON.parse(JSON_string);
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
  button.setAttribute("class", "button");
  button.setAttribute("id", "go");
  button.innerHTML = "Go!";
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const fd = new FormData(form);
    for (item of fd) {
      populate_dom(weather_data_location(item));
    }
  });

  form.appendChild(button);
  div.appendChild(form);
}
function loader() {
  const display = document.querySelector(".display");
  const loader = document.createElement("div");
  loader.setAttribute("class", "loader");
  loader.innerHTML = "Loading!";
  display.appendChild(loader);
}
function remove_loader() {
  const display = document.querySelector(".display");
  while (display.hasChildNodes()) {
    display.removeChild(display.firstChild);
  }
}
create_form();
populate_dom(weather_data_location("Mumbai"));
async function populate_dom(obj) {
  const display = document.querySelector(".display");
  while (display.hasChildNodes()) {
    display.removeChild(display.firstChild);
  }
  loader();
  dt = await obj;
  remove_loader();
  const div_left = document.createElement("div");
  div_left.setAttribute("class", "left");
  function return_temperatures(dt) {
    return {
      temperature_c: dt.current.temp_c,
      temperature_f: dt.current.temp_f,
    };
  }
  const div_t = document.createElement("div");
  const temperatures = return_temperatures(dt);
  div_t.innerHTML = "Temperature(in Celcius) : " + temperatures.temperature_c;
  const celc_btn = document.querySelector(".celcius");

  celc_btn.addEventListener("click", function () {
    div_t.innerHTML = "Temperature(in Celcius) : " + temperatures.temperature_c;
  });
  const fahr_btn = document.querySelector(".fahr");
  fahr_btn.addEventListener("click", function () {
    div_t.innerHTML =
      "Temperature(in Fahrenheit) : " + temperatures.temperature_f;
  });
  div_left.appendChild(div_t);

  dt_curr_use = {
    "Last Updated": dt.current.last_updated,
    "Wind Speed(kph)": dt.current.wind_kph,
    "Precipitation(mm)": dt.current.precip_mm,
    Humidity: dt.current.humidity,
    UV: dt.current.uv,
    Location: dt.location.name + "," + dt.location.region,
  };
  //create function to determine day or night
  function return_day_night(dt) {
    const time_string = dt.current.last_updated;
    const time_array = time_string.split(" ");
    const time = parseInt(time_array[1]);
    if (time < 18 && time > 6) {
      return "day/";
    } else {
      return "night/";
    }
  }
  const img = document.createElement("img");

  function url() {
    for (let i = 0; i < condition_json.length; i++) {
      if (dt.current.condition.code == condition_json[i].code) {
        return (url =
          "./weather/64x64/" +
          return_day_night(dt) +
          condition_json[i].icon +
          ".png");
      }
    }
  }
  const div_text = document.createElement("div");
  div_text.setAttribute("id", "text");
  div_text.innerHTML = dt.current.condition.text;
  img.setAttribute("id", "icon");
  img.src = url();
  div_left.appendChild(img);
  div_left.appendChild(div_text);
  display.appendChild(div_left);
  const div_right = document.createElement("div");
  div_right.setAttribute("class", "right");
  for (const item in dt_curr_use) {
    const div = document.createElement("div");
    div.innerHTML = item + " : " + dt_curr_use[item];
    div.setAttribute("id", item);
    div.setAttribute("class", "div_right");
    div_right.appendChild(div);
  }
  display.appendChild(div_right);
}

async function weather_data_location(location) {
  const url = base_url + "/current.json?key=" + key + "&q=" + location;
  const weather_data = await fetch(url);
  const data = await weather_data.json();
  console.log(data);
  return data;
}
