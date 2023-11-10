const content = document.querySelector(".mars-content");
const apiKey = "8GNC8ah2YfQVedqCMw8Gg59zKlhiijtfQfffHz65";

const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`;

document.addEventListener("DOMContentLoaded", getData);

async function getData() {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result.photos);

  result.photos.forEach((element) => {
    console.log(element);

    const { id, camera, img_src } = element;

    const { name } = camera;

    const divEl = document.createElement("div");
    divEl.classList.add("item-element");

    divEl.innerHTML = `
    <img src="${img_src}" class="camera-img" alt="Camera"></img>
    <p class="name">Camera: ${name}</p>
    `;

    content.appendChild(divEl);
  });
}
