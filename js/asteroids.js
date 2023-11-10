const content = document.querySelector(".asteroids-content");
const apiKey = "8GNC8ah2YfQVedqCMw8Gg59zKlhiijtfQfffHz65";

const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-09-10&end_date=2023-09-11&api_key=${apiKey}`;

document.addEventListener("DOMContentLoaded", getData);

async function getData() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    const { near_earth_objects } = result;
    console.log(result);
    console.log(near_earth_objects);

    const dataFor20232010 = near_earth_objects["2023-09-10"];
    const dataFor20232011 = near_earth_objects["2023-09-11"];

    console.log(dataFor20232011);

    dataFor20232010.forEach((element) => {
      let {
        id,
        name,
        close_approach_data,
        is_potentially_hazardous_asteroid,
        absolute_magnitude_h,
      } = element;

      is_potentially_hazardous_asteroid === true
        ? (is_potentially_hazardous_asteroid = "Yes")
        : (is_potentially_hazardous_asteroid = "No");

      const [close_data] = close_approach_data;

      const { close_approach_date_full } = close_data;

      const divEl = document.createElement("div");
      divEl.classList.add("asteroid-element");

      divEl.innerHTML = `
      <p class="name">Name: ${name}</p>
        <p class="absolute-magnitude">Magnitude: ${absolute_magnitude_h}</p>
           <p class="potentially-hazardous">Potentially hazardous: ${is_potentially_hazardous_asteroid}</p>
           <p class="absolute-magnitude">Approach date: ${close_approach_date_full}</p>
      `;

      content.appendChild(divEl);
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
