"use strict";
const container = document.querySelector(".container");

const careers = ["Youtuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;
let charecterIndex = 0;

updateText();

function updateText() {
  charecterIndex++;
  container.textContent = `i am ${
    careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"
  } ${careers[careerIndex].slice(0, charecterIndex)} `;
  if (charecterIndex === careers[careerIndex].length) {
    careerIndex++;
    charecterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 300);
}
