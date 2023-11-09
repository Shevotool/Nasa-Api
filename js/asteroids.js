const content = document.querySelector(".content");
const apiKey = "8GNC8ah2YfQVedqCMw8Gg59zKlhiijtfQfffHz65";

const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${apiKey}`;

console.log(url);
