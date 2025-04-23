const sliderContainer = document.querySelector(".slider-container");
const arr = document.querySelectorAll(".image");

const arrow_left = document.querySelector("#arrow_left");
const arrow_right = document.querySelector("#arrow_right");

const parent_indicator = document.querySelector(".indicator-slider");

for (let i = 0; i < arr.length; i++) {
  const element = document.createElement("span");
  element.classList.add("indicator");
  parent_indicator.appendChild(element);
}

const indicators_group = document.querySelectorAll(".indicator");



let sliderPosition = 0; //oindicador redondo de posicion de la imgen visible vs las que faltan
let indexArr = 0;

if (window.innerWidth >= 768 && window.innerWidth < 1024) {
  indexArr = 1;
  console.log("pantalla mediana");
}
if (window.innerWidth >= 1024) {
  indexArr = 3;
  console.log("pantalla grande");
}

indicators_group[indexArr].classList.add("activate_indicator");
//para dispositivos pequeños el width de cada imagen debe ser de 320px

arrow_right.addEventListener("click", () => {
  console.log(indexArr < arr.length);

  if (indexArr < arr.length - 1) {
    sliderContainer.style.left = `${sliderPosition - 320}px`;
    indicators_group[indexArr].classList.remove("activate_indicator");
    indicators_group[indexArr + 1].classList.add("activate_indicator");
    sliderPosition = sliderPosition - 320;
    indexArr++;
    // console.log(indexArr);
  } else {
    console.log("no se puede ir mas allá");
  }
});

arrow_left.addEventListener("click", () => {
  //  console.log(indexArr);
  let positinoLeftArr = 0;

  if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    positinoLeftArr = 2;
    console.log("pantalla mediana");
  }
  if (window.innerWidth >= 1024) {
    positinoLeftArr = 4;
    console.log("pantalla grande");
  }
console.log(indexArr, positinoLeftArr);

  if (indexArr > positinoLeftArr) {
    sliderContainer.style.left = `${sliderPosition + 320}px`;
    indicators_group[indexArr].classList.remove("activate_indicator");
    indicators_group[indexArr - 1].classList.add("activate_indicator");
    sliderPosition = sliderPosition + 320;
    //   console.log(indexArr);
    indexArr--;
  }
});
