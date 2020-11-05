// scripts
const body = document.querySelector('#body');
const btn = document.querySelector('.button');
const innercards = document.querySelectorAll('.div');
const secondFlex = document.querySelector('.second-flex');
const thirdFlex = document.querySelector('.third-flex');
const headings = document.querySelector('.headings');
const nums = document.querySelectorAll('.num');
const nums2 = document.querySelectorAll('.num2');
const caps = document.querySelectorAll('.cap');
const togglers = document.querySelectorAll('.toggls');
const grayText = document.querySelectorAll('.gray');
console.log(innercards);
console.log(typeof nums2)

btn.addEventListener('click', function() {
    body.classList.toggle('black-bg');
    headings.classList.toggle('color');
    grayText.forEach(function(gray){
        gray.classList.toggle('gray-transform');
    })
    innercards.forEach(function(inner){
        inner.classList.toggle('black-bg');
    })
    caps.forEach(function(cap){
        cap.classList.toggle('color');
    })
    nums2.forEach(function(num2){
        num2.classList.toggle('color');
    })
    
    nums.forEach(function(num){
        num.classList.toggle('color');
    })

    togglers.forEach(function(t){
        t.classList.toggle('white');
    })  

})