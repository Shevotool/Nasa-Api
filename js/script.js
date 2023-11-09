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

    console.log(result);

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

    const divEl = document.createElement("div");
    divEl.classList.add("nasa");

    divEl.innerHTML = `<p class="date">${formattedDate}</p>
    <img src="${hdurl}" alt="${title}" class="nasa-img">
    <p class="title-text">${title}</p>
    <p class="copyright">Image Credit & Copyright ${copyright}</p>
    <p class="explanation-text"><span class="explanation">Explanation:</span> ${explanation}</p>
    `;

    content.appendChild(divEl);

    const creditCopy = document.querySelector(".copyright");

    if (copyright === undefined) {
      creditCopy.classList.add("no-copy");
    } else {
      creditCopy.classList.remove("no-copy");
    }

    const nasaImg = document
      .querySelector(".nasa-img")
      .addEventListener("click", getImage);

    function getImage() {
      const newUrl = hdurl;

      window.location.href = newUrl;
      console.log(newUrl);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
