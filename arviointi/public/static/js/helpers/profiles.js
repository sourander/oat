import { printQuestions } from "./query.js";
import { printAnswers } from "./result.js";

import { oppimispaivakirjaConfig as oldOatConf } from "../config/oppimispaivakirja_2024.js";
import { oppimispaivakirjaConfig } from "../config/oppimispaivakirja_2025.js";
import { videoesitysConfig } from "../config/videoesitys.js";
import { itsearviointiConfig } from "../config/itsearviointi.js";
// import { uusiConfig } from '../config/something.js';

// Module global variable
let availableProfiles = [
  { name: "Oppimispäiväkirja 2024 (ARCHIVE)", config: oldOatConf },
  { name: "Oppimispäiväkirja 2025 (WIP)", config: oppimispaivakirjaConfig },
  { name: "Videoesitys", config: videoesitysConfig },
  { name: "Itsearviointi", config: itsearviointiConfig },
  // {name: "Something New", config: uusiConfig},
];

export function generateProfileSelect() {
  // Choose the Profile Selector dropdown and generate dropdown options into it.
  let selectElement = document.getElementById("profileSelect");
  generateOptions(selectElement, availableProfiles);

  // When user selects one of the options, print questions
  selectElement.addEventListener("change", loadQuestions);
}

function loadQuestions(event) {
  // Clear the containers
  const questionsContainer = document.getElementById("questionsContainer");
  questionsContainer.innerHTML = "";
  const resultsContainer = document.getElementById("gradeResultContainer");
  resultsContainer.innerHTML = "";

  let chosenIndex = event.currentTarget.value;
  console.log("Chosen index: ", chosenIndex);
  let chosenProfile = availableProfiles[chosenIndex];
  console.log("Loading profile: ", chosenProfile.name);
  printQuestions(chosenProfile.config);

  // Add or replace event listener for the grade button
  const gradeButton = document.getElementById("gradeButton");
  gradeButton.onclick = ("click", () => printAnswers(chosenProfile.config));

  // Make button visible
  gradeButton.style.display = "block";
}

function generateOptions(selectElement) {
  for (let i = 0; i < availableProfiles.length; i++) {
    let option = document.createElement("option");
    option.value = i;
    // Use the variable name as the text
    option.text = availableProfiles[i].name;
    selectElement.appendChild(option);
  }
}
