const hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
const button = document.querySelector('button')
const main = document.querySelector('main')
const span = document.querySelector('span')

document.addEventListener('DOMContentLoaded',()=>{
    console.log(hex);    
})

button.addEventListener('click',()=>{
    let element = '#';
    for (let i = 0; i <6; i++) {
         element += hex[getRandomNumber()];        
    }
    main.style.backgroundColor = element
    span.textContent = element
    console.log(element);
    
})

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length)
}