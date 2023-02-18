"use strict";

const body = document.querySelector(".body");
const color_option_1 = document.querySelector(".color-option__1");
const color_option_2 = document.querySelector(".color-option__2");
const color_option_3 = document.querySelector(".color-option__3");

color_option_1.addEventListener("click", () => {
  cycleGradients(
    color_option_1,
    color_option_2,
    color_option_3,
    "default-gradient",
    "purple-gradient",
    "green-gradient"
  );
});

color_option_2.addEventListener("click", () => {
  cycleGradients(
    color_option_2,
    color_option_1,
    color_option_3,
    "purple-gradient",
    "default-gradient",
    "green-gradient"
  );
});

color_option_3.addEventListener("click", () => {
  cycleGradients(
    color_option_3,
    color_option_1,
    color_option_2,
    "green-gradient",
    "default-gradient",
    "purple-gradient"
  );
});

const cycleGradients = function (
  selectAdd,
  selectRem1,
  selectRem2,
  gradientAdd,
  gradientRem1,
  gradientRem2
) {
  if (!selectAdd.classList.contains("selected")) {
    selectRem1.classList.remove("selected");
    selectRem2.classList.remove("selected");
    selectAdd.classList.add("selected");
    body.classList.remove(`${gradientRem1}`);
    body.classList.remove(`${gradientRem2}`);
    body.classList.add(`${gradientAdd}`);
  }
};
