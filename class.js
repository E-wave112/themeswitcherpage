const body = document.querySelector('#body');
const btn = document.querySelector('.button');
const innercards = document.getElementsByClassName('div');
const secondFlex = document.querySelector('.second-flex');
const thirdFlex = document.querySelector('.third-flex');
const headings = document.querySelector('.headings');
const nums = document.getElementsByClassName('num2');
console.log(firstFlex);
console.log(nums)

btn.addEventListener('click', () => {
    body.classList.toggle('black-bg');
    headings.classList.toggle('color');
    nums.classList.toggle('color');
    innercards.classList.toggle('black-bg');
    // secondFlex.classList.toggle('black-bg');
    // thirdFlex.classList.toggle('black-bg');
    
})