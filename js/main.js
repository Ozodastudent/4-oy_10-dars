const allLights = () => {
  let redLight = document.querySelector(".red");
  let yellowLight = document.querySelector(".yellow");
  let greenLight = document.querySelector(".green");

  setTimeout(() => {
    redLight.style.opacity = 1;
    yellowLight.style.opacity = 0.3;
    greenLight.style.opacity = 0.3;
  }, 2000);

  setTimeout(() => {
    yellowLight.style.opacity = 1;
    redLight.style.opacity = 1;
    greenLight.style.opacity = 0.3;
  }, 4000);

  setTimeout(() => {
    greenLight.style.opacity = 1;
    redLight.style.opacity = 0.2;
    yellowLight.style.opacity = 0.2;
  }, 6000);
};
const timerEl = setInterval(() => {
  allLights();
}, 8000);
allLights;

// --------------------
