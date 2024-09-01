const colores = ["green", "red", "blue", "yellow","white","purple"]
const button = document.querySelector('button')
const main = document.querySelector('main')
const span = document.querySelector('span')


document.addEventListener('DOMContentLoaded',()=>{
    console.log(colores);
})

button.addEventListener('click',()=>{
    const numeroAzar = Math.floor(Math.random()*colores.length)
    console.log(numeroAzar);
    
    main.style.backgroundColor = colores[numeroAzar]
    span.textContent = colores[numeroAzar]

})