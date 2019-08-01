'use strict';

const tasks = [
    {
        name: 'Recoger setas en el campo',
        completed: true
    },
    {
        name: 'Comprar pilas',
        completed: true
    },
    {
        name: 'Poner una lavadora de blancos',
        completed: true
    },
    {
        name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false,
    },
];

// Elemento del HTML donde queremos introducir la lista
const list = document.querySelector('.list');

// Mostrar una frase que muestre cuantas tareas hay
/* a) Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado. */

let res = `
    <li class="item0">${tasks[0].name}</li>
    `;

list.innerHTML = res;

const item0 = document.querySelector('.item0');

if (tasks[0].completed === true) {
    item0.classList.add('cross-out');
}