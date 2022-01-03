import { zipCodeData } from "./util.js";

const zipCode = document.querySelector("#zip-code");
const searchButton = document.querySelector("#search");

searchButton.addEventListener("click", function() {
    zipCodeData(zipCode.value);
});