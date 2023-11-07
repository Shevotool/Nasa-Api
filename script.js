const content = document.querySelector(".content");
const apiKey = "8GNC8ah2YfQVedqCMw8Gg59zKlhiijtfQfffHz65";

const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

document.addEventListener("DOMContentLoaded", getData);

async function getData() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    //console.log(result);

    const { date, hdurl, title, explanation, copyright } = result;

    const dateObj = new Date(date);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthName = monthNames[dateObj.getMonth()];

    const formattedDate = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

    console.log(dateObj);

    const divEl = document.createElement("div");
    divEl.classList.add("nasa");

    divEl.innerHTML = `<p class="date">${formattedDate}</p>
    <img src="${hdurl}" alt="${title}" class="nasa-img">
    <p class="title-text">${title}</p>
    <p class="copyright">Image Credit & Copyright ${copyright}</p>
    <p class="explanation-text"><span class="explanation">Explanation:</span> ${explanation}</p>
    `;

    //console.log(divEl);
    content.appendChild(divEl);
  } catch (error) {
    console.error("Error:", error);
  }
}
