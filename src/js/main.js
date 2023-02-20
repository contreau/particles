"use strict";

// color options
const color_option_1 = document.querySelector(".color-option__1");
const color_option_2 = document.querySelector(".color-option__2");
const color_option_3 = document.querySelector(".color-option__3");

// speed options
const speed_option_1 = document.querySelector(".speed-option1");
const speed_option_2 = document.querySelector(".speed-option2");
const speed_option_3 = document.querySelector(".speed-option3");
const speed_option_4 = document.querySelector(".speed-option4");
const speed_option_5 = document.querySelector(".speed-option5");

// motion options
const motion_option_1 = document.querySelector(".motion-option1");
const motion_option_2 = document.querySelector(".motion-option2");
const motion_option_3 = document.querySelector(".motion-option3");

// Element Arrays
const particleArr = Array.from(document.querySelectorAll(".particle"));
const speedOptions_Arr = Array.from(document.querySelectorAll(".speed-option"));
const motionOptions_Arr = Array.from(
  document.querySelectorAll(".motion-option")
);
const colorOptions_Arr = Array.from(document.querySelectorAll(".color-option"));

// Other
const body = document.querySelector(".body");
const centerpiece_container = document.querySelector(".centerpiece__container");
const hoverMe_pg = document.querySelector(".hoverMe");

// Event Functions
const cycleGradients = function (desired_option, desired_gradient, bg_color) {
  if (!desired_option.classList.contains("color-selected")) {
    colorOptions_Arr.map((c) => c.classList.remove("color-selected"));
    desired_option.classList.add("color-selected");
    for (let className of body.classList) {
      if (className != "body") {
        body.classList.remove(className);
      }
    }
    body.classList.add(desired_gradient);
    particleArr.map((p) => (p.style.backgroundColor = `${bg_color}`));
  }
};

const cycleSpeed = function (desired_option, desired_duration) {
  if (!desired_option.classList.contains("speed-selected")) {
    speedOptions_Arr.map((s) => s.classList.remove("speed-selected"));
    desired_option.classList.add("speed-selected");
    particleArr.map((p) => (p.style.animationDuration = desired_duration));
  }
};

const cycleMotion = function (desired_option, desired_height) {
  if (!desired_option.classList.contains(".motion-selected")) {
    motionOptions_Arr.map((m) => m.classList.remove("motion-selected"));
    desired_option.classList.add("motion-selected");
    particleArr.map((p) => (p.style.height = desired_height));
  }
};

// removes display message on hover
centerpiece_container.addEventListener("mouseover", () => {
  hoverMe_pg.style.display = "none";
});

// Color Option Event Listeners
color_option_1.addEventListener("click", () => {
  cycleGradients(color_option_1, "default-gradient", "#fff");
});

color_option_2.addEventListener("click", () => {
  cycleGradients(color_option_2, "blue-gradient", "#fff");
});

color_option_3.addEventListener("click", () => {
  cycleGradients(color_option_3, "green-gradient", "#fff");
});

// Speed Option Event Listeners
speed_option_1.addEventListener("click", () => {
  cycleSpeed(speed_option_1, "0.5s");
});

speed_option_2.addEventListener("click", () => {
  cycleSpeed(speed_option_2, "2.5s");
});

speed_option_3.addEventListener("click", () => {
  cycleSpeed(speed_option_3, "4.5s");
});

speed_option_4.addEventListener("click", () => {
  cycleSpeed(speed_option_4, "6.5s");
});

speed_option_5.addEventListener("click", () => {
  cycleSpeed(speed_option_5, "8.5s");
});

// Motion Option Event Listeners
motion_option_1.addEventListener("click", () => {
  cycleMotion(motion_option_1, "0.5rem");
});

motion_option_2.addEventListener("click", () => {
  cycleMotion(motion_option_2, "0.7rem");
});

motion_option_3.addEventListener("click", () => {
  cycleMotion(motion_option_3, "1rem");
});

// adds temporary message to mobile viewers
const mobile_under_query = window.matchMedia("(max-width: 599px)");
if (mobile_under_query.matches) {
  const particleBin__top = document.querySelector(".particleBin__top");
  const mobileText = document.createElement("p");
  mobileText.style.opacity = 0;
  mobileText.style.textAlign = "center";
  mobileText.style.animation = "hoverMe__fadeIn 4s 2s forwards";
  mobileText.innerText = "View on a larger screen to customize this display...";
  particleBin__top.insertAdjacentElement("afterend", mobileText);
}
