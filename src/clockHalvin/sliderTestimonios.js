const sliderContainer = document.querySelector('.slider-container')
const arr = document.querySelectorAll('.image')

const arrow_left = document.querySelector('#arrow_left')
const arrow_right = document.querySelector('#arrow_right')


const parent_indicator = document.querySelector('.indicator-slider')

for (let i = 0; i < arr.length; i++) {
    const element = document.createElement('span')
    element.classList.add('indicator')
    parent_indicator.appendChild(element)

}

const indicators_group = document.querySelectorAll('.indicator')

indicators_group[0].classList.add('activate_indicator')


let sliderPosition = 0
let indexArr = 0


//para dispositivos pequeños el width de cada imagen debe ser de 320px



arrow_right.addEventListener('click', () => {


    console.log(indexArr < arr.length);

    if (indexArr < arr.length - 1) {

        sliderContainer.style.left = `${sliderPosition - 320}px`
        indicators_group[indexArr].classList.remove('activate_indicator')
        indicators_group[indexArr + 1].classList.add('activate_indicator')
        sliderPosition = sliderPosition - 320
        indexArr++
        console.log(indexArr);
    } else {
        console.log('no se puede ir mas allá');

    }


})

arrow_left.addEventListener('click', () => {


    console.log(indexArr);


    if (indexArr >= 1) {
        sliderContainer.style.left = `${sliderPosition + 320}px`
        indicators_group[indexArr].classList.remove('activate_indicator')
        indicators_group[indexArr - 1].classList.add('activate_indicator')
        sliderPosition = sliderPosition + 320
        console.log(indexArr);
        indexArr--

    }



})





