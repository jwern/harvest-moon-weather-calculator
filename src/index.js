require.context("../src/images/", true, /\.(jpg|jpeg|gif|png|svg|webp)$/);
import "./style.scss";
import {
  displayNewCrop,
  refreshCurrentCrops,
  addNewCropSelections,
  updateDropdownOptions,
  jumpToNextCrop,
  returnToTop,
} from "./domDrawing.js";
import {
  myCrops,
  addWeatherToCrops,
  trackWeatherButtonPressed,
  createNewCrop,
} from "./trackCrops.js";
import { weatherTypes } from "./weathertypes.js";
import { cropId } from "./crop.js";

const findWeatherType = function () {
  const button = this.closest(".weather-button");

  const chosenWeather = weatherTypes.find(
    (type) => type.weather === button.getAttribute("data-weather")
  );

  addWeatherToCrops(chosenWeather);
  trackWeatherButtonPressed.weatherButton(chosenWeather);
  refreshCurrentCrops();
};

const addCrop = function (event) {
  event.preventDefault();
  let crop = Object.fromEntries(new FormData(event.target).entries());
  let newCrop = createNewCrop(crop.type);
  displayNewCrop(newCrop);
};

const slideCropForm = function (button) {
  const form = document.getElementById("add-crops");
  form.classList.toggle("hidden");

  if (form.classList.contains("hidden")) {
    button.target.innerText = "+";
  } else {
    button.target.innerText = "-";
  }
};

const addListeners = function () {
  const weatherButtons = document.querySelectorAll(".weather-button img");
  weatherButtons.forEach((button) => {
    button.addEventListener("click", findWeatherType);
  });

  const undoWeatherButton = document.getElementById("weather-buttons-undo");
  undoWeatherButton.addEventListener("click", () => {
    myCrops.undoLastWeather();
    refreshCurrentCrops();
  });

  const addCropForm = document.getElementById("add-crops-form");
  addCropForm.addEventListener("submit", (e) => addCrop(e));

  const addCropReveal = document.getElementById("add-crops-reveal");
  addCropReveal.addEventListener("click", (e) => slideCropForm(e));

  const addCropRadioButtons = addCropForm.querySelectorAll(
    'input[name="season"]'
  );
  addCropRadioButtons.forEach((button) =>
    button.addEventListener("change", updateDropdownOptions)
  );

  const cropAnchorButton = document.getElementById("next-crop-anchor");
  cropAnchorButton.addEventListener("click", jumpToNextCrop);

  const weatherButtonsAnchorButton = document.getElementById(
    "jump-to-weather-buttons"
  );
  weatherButtonsAnchorButton.addEventListener("click", returnToTop);
};

// LocalStorage test from MDN
const storageAvailable = function (type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
};

const checkStorage = function () {
  if (storageAvailable("localStorage")) {
    let storedCropsList = localStorage.getItem("localMyCrops");
    let storedCropId = localStorage.getItem("localCropId");
    let storedWeatherSelected = localStorage.getItem("localLastWeatherPressed");

    if (storedCropsList) {
      myCrops.replaceWithLocalCrops(storedCropsList);
      for (let crop of myCrops.getCrops()) {
        displayNewCrop(crop);
      }
      if (storedCropId) {
        cropId.updateIdWithLocal(storedCropId);
      }
      if (storedWeatherSelected) {
        trackWeatherButtonPressed.getLocalLastWeather(storedWeatherSelected);
      }
    }
  }
};

const launchApp = (function () {
  const calculator = document.getElementById("calculator-body");

  if (calculator) {
    addListeners();
    addNewCropSelections("Spring");
    checkStorage();
  }
})();
