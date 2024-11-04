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

// const input = document.getElementById('input')
// // input.setAttribute('value', 'Hugo Code')
// input.removeAttribute('value')

// document.getElementById('styles').style.color= 'red'
// document.getElementById('styles').style.backgroundColor= 'black'

// const color = document.getElementById('styles').style.color
// const background = document.getElementById('styles').style.backgroundColor
// console.log(color)
// console.log(background)

// const container = document.getElementById('div')
// container.querySelector('p.style').innerHTML = 'Texto desde JavaScript'
// container.querySelector('p.style').style.color = 'blue'

// console.log(window)
//const clickMe = () => {
    // const height = window.innerHeight
    // const width = window.innerWidth

    // console.log('height: ', height, 'width: ', width)
    // open('https://www.digitalhouse.com/ar', 'Digital House')
//     document.getElementById('screenh').innerHTML = screen.height + 'px'
//     document.getElementById('screenw').innerHTML = screen.width + 'px'
//     document.getElementById('screenc').innerHTML = screen.colorDepth + 'bits'
//     document.getElementById('url').innerHTML = location.href
//     document.getElementById('cookies').innerHTML = navigator.cookieEnabled ? 'Si' : 'No'
    
// }
// const historyBack = () => history.back()
// const historyForward = () => history.forward()
// document.getElementById('btn1').addEventListener('click', historyBack)
// document.getElementById('btn2').addEventListener('click', historyForward)

// const geolocation = document.getElementById('ubicacion')

// const showPosition = position => {
//     geolocation.innerHTML = 'La latitud es: ' + position.coords.latitude + '<br>La longitud es: ' + position.coords.longitude
// }

// const getLocation = () => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition)
//     }else{
//         geolocation.innerHTML = 'La geolocalización está apagada o no es soportada por este navegador'
//     }
// }

// const doValidation = () => {
//     const name = document.getElementById('name');
//     // if (!number.checkValidity()) {
//     //     document.getElementById('error').innerHTML = number.validationMessage
//     // }else{
//     //     document.getElementById('error').innerHTML = 'El número está correcto'
//     // }

//     document.getElementById('error').innerHTML = name.checkValidity() 
//         ? 'El nombre está correcto' 
//         : 'El nombre es requerido, debes completar este campo'
// }

// const goBackx2 = () => window.history.go(-2) // Nos permite ir 2 veces hacia atrás
// const goBack = () => window.history.back() // Nos permite ir hacia atrás una sola vez
// const goForward = () => window.history.forward() // Nos permite ir hacia adelante una sola vez
// const goForwardx2 = () => window.history.go(2) // Nos permite ir 2 veces hacia adelante

const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const job = document.getElementById('job')

document.getElementById('welcome').innerHTML = localStorage.getItem('username') == null ? '' : localStorage.getItem('username')

const save = () => {
    localStorage.setItem('username', firstname.value + ' ' + lastname.value)
    localStorage.setItem('job', job.value )
}