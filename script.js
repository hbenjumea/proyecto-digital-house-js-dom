// alert("Bienvenido al curso de JavaScript para DOM");

// const ready = confirm("¿Hiciste los cursos de Maquetación Web y Programación imperativa?")
// console.log(ready)
// console.log(typeof(ready)

// const res = prompt('¿Cuál es tu lenguaje de programación favorito?', 'JavaScript')
// console.log(res)
// console.log(typeof(res))

// const array = ['HTML', 'CSS', 'JavaScript', 'ReactJS']

// const object = { nombre: 'Hugo Andres', ocupacion: 'Desarrollador', materia: 'JavaScript para DOM' }

// const objectArray = [
//     {materia: 'HTML', dificultad: 6, necesario: true},
//     {materia: 'CSS', dificultad: 8, necesario: true},
//     {materia: 'JavaScript', dificultad: 9.5, necesario: false},
//     {materia: 'ReactJS', dificultad: 8, necesario: false}
// ]

//document.getElementById('test').innerHTML = 'Hola Mundo desde JavaScript'
//document.getElementById('test').style.color = 'red'
//document.getElementById('test').setAttribute('class', 'colorado')
// console.log(document.getElementById('test'))
// console.log(document.getElementsByClassName('test'))
// console.log(document.getElementsByTagName('p'))

// const salutations = document.querySelectorAll('p.saludo')

// document.getElementById('test').innerHTML = 'En este párrafo vamos a estar escribiendo el primero de los saludos, el cual es: ' + salutations[0].innerHTML

// const form = document.forms['form1'];
// let text = '';
// for (let i = 0; i < form.length; i++) {
//     text += form.elements[i].value + '<br>';    
// }

// document.getElementById('test').innerHTML = text;

// DECLARATIVE FUNCTIONS
// function changeThisElement(element) {
//     element.innerHTML = 'Hola mundo desde función declarativa'
// }

// ARROW FUNCTIONS
// const changeThisElement = element => element.innerHTML = 'Hola mundo desde función flecha'

// const displayDate = () => document.getElementById('test').innerHTML = Date()

// document.getElementById('btn').onclick = displayDate // No abro y cierro parentesis porque quiero que se ejecute cuando se de la acción

// const checkCookies = () => {
//     let text = navigator.cookieEnabled ? 'Cookies habilitadas' : 'Cookies no habilitadas';
//     document.getElementById('test').innerHTML = text;
// }

// const upperCase = () => {
//     const input = document.getElementById('name');
//     input.value = input.value.toUpperCase();
// }

// const mouseOver = element => {
//     element.innerHTML = 'Estás sobre el div'
// }
// const mouseOut = element => {
//     element.innerHTML = 'Estás fuera del div'
// }
// const changeStyle = element => {
//     element.style.background = 'aqua'
// }

//let key

// const keydown = ($event) => {
//     key = $event.altKey
//     console.log(key)
//     document.getElementById('alt').innerHTML = key ? 'Tocando ALT' : 'No tocando ALT'
// }
// const keydown = ($event) => {
//     key = $event.getModifierState('CapsLock')
//     console.log(key)
    
// }

// Creando un nodo párrafo
// const paragraph = document.createElement('p')
// // Acá creamos un elemento de texto
// const node = document.createTextNode('Este es contenido nuevo')
// // Incorporamos el elemento de texto al nodo de párrafo
// paragraph.appendChild(node)

// // En la variable container tenemos el DIV
// const container = document.getElementById('div1')
// // const p1 = document.getElementById('p1')
// // //container.appendChild(paragraph)
// // container.insertBefore(paragraph, p1)

// // const p2 = document.getElementById('p2')
// // p2.remove()
// // container.removeChild(p1)

// const p3 = document.getElementById('p3')
// container.replaceChild(paragraph, p3)

// const addClass = () => {
//     const divClassList = document.getElementById('div1').classList
//     divClassList.add('red-background')
// }
// const removeClass = () => {
//     document.getElementById('div1').classList.remove('red-background')    
// }
//  const toggleClass = () => {
//      document.getElementById('div1').classList.toggle('red-background')    
//  }

// const p1 = document.getElementById('p1')
// // const p2 = document.getElementById('p2')
// p1.setAttribute('class', 'red-background') 

// // let text = p1.getAttribute('class') ? p1.getAttribute('class') : p2.getAttribute('class') 
// let text = p1.getAttribute('class')
// document.getElementById('atribute').innerHTML = text

const input = document.getElementById('input')
// input.setAttribute('value', 'Hugo Code')
input.removeAttribute('value')