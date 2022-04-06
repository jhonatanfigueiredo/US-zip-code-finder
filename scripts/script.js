import { zipCodeData } from "./util.js";

const zipCode = document.querySelector("#zip-code");
const findButton = document.querySelector("#find");

findButton.addEventListener("click", function() {
    zipCodeData(zipCode.value);
});