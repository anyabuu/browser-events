//Task1
//окрашиваем элементы поочередно через таймер
//вариант 1

let elements = document.querySelectorAll('.task-one li');

function elementsColor(elements){


    elements.forEach(function(el, index){
        setTimeout(function(){
            el.style.color = 'red'
        }, index * 2000) // задаем каждому элементу свою задержку
    })

}

elementsColor(elements)

//вариант 2


let elements2 = document.querySelectorAll(".task-one h1");

let index = 0

let intervalId = setInterval(function(){


    elements2[index].style.color = 'blue'

    index++

    if (index === elements2.length){
        clearInterval(intervalId)
    }

}, 2000)



// Task2
// окрашивание элементов списка в цвет

let listElements = document.querySelectorAll('li');


listElements.forEach(function(el){
    el.addEventListener('click', function (event){
        el.classList.toggle('red')
    })
})


// Task3
// скрывать/показывать текст по нажатию кнопок

let hideButton = document.getElementById('buttonHide');
let showButton = document.getElementById('buttonShow');
let text = document.getElementById('text');

function hideText(){
    text.style.display = 'none'
}

function showText(){
    text.style.display = 'block'
}

hideButton.addEventListener('click', hideText);
showButton.addEventListener('click', showText);

//Task4
// раскрывающийся список/меню по нажатию

let title = document.getElementById('title-group');
let list = document.getElementById('list');
let arrLeft = document.getElementById('arr-left');
let arrDown = document.getElementById('arr-down');

title.addEventListener("click", show);

function show(){
    list.classList.toggle('hide')
    arrLeft.classList.toggle('hide')
    arrDown.classList.toggle('hide')
}