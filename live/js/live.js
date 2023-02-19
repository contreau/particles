"use strict";

const body = document.querySelector(".body");
const color_option_1 = document.querySelector(".color-option__1");
const color_option_2 = document.querySelector(".color-option__2");
const color_option_3 = document.querySelector(".color-option__3");
const particleArr = Array.from(document.querySelectorAll(".particle"));
const centerpiece_container = document.querySelector(".centerpiece__container");
const hoverMe_pg = document.querySelector(".hoverMe");

color_option_1.addEventListener("click", () => {
  cycleGradients(
    color_option_1,
    color_option_2,
    color_option_3,
    "default-gradient",
    "blue-gradient",
    "green-gradient",
    "#fff"
  );
});

color_option_2.addEventListener("click", () => {
  cycleGradients(
    color_option_2,
    color_option_1,
    color_option_3,
    "blue-gradient",
    "default-gradient",
    "green-gradient",
    "#373737"
  );
});

color_option_3.addEventListener("click", () => {
  cycleGradients(
    color_option_3,
    color_option_1,
    color_option_2,
    "green-gradient",
    "default-gradient",
    "blue-gradient",
    "#fff"
  );
});

const cycleGradients = function (
  selectAdd,
  selectRem1,
  selectRem2,
  gradientAdd,
  gradientRem1,
  gradientRem2,
  bg_color
) {
  if (!selectAdd.classList.contains("selected")) {
    selectRem1.classList.remove("selected");
    selectRem2.classList.remove("selected");
    selectAdd.classList.add("selected");
    body.classList.remove(`${gradientRem1}`);
    body.classList.remove(`${gradientRem2}`);
    body.classList.add(`${gradientAdd}`);
    particleArr.map((p) => (p.style.backgroundColor = `${bg_color}`));
  }
};

centerpiece_container.addEventListener("mouseover", () => {
  hoverMe_pg.style.display = "none";
});
