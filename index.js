//Task1
//окрашиваем элементы поочередно через таймер
//вариант 1

let elements = document.querySelectorAll('.task-one li');

function elementsColor(elements){


    elements.forEach(function(el, index){
        setTimeout(function(){
            el.style.color = 'red'
        }, index * 1000) // задаем каждому элементу свою задержку
    })

}

elementsColor(elements)

//вариант 2


let elements2 = document.querySelectorAll(".task-one h2");

let index = 0

let intervalId = setInterval(function(){


    elements2[index].style.color = 'blue'

    index++

    if (index === elements2.length){
        clearInterval(intervalId)
    }

}, 1000)



// Task2
// окрашивание элементов списка в цвет по нажатию

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

//Task5
//удаление сообщений по нажатию кнопки

let removeButtons = document.getElementsByClassName('remove-button');

Array.from(removeButtons).forEach(function(button){

    button.addEventListener('click', function(event){
        event.target.closest('.pane').classList.add('hide')
    })

})


//Task6
// перемещение мяча по полю по щелчку

let ball = document.getElementById('ball');
let field = document.getElementById('field');



field.addEventListener('click',function (event) {

    let containerRect = field.getBoundingClientRect();

    let x = event.clientX - containerRect.left - field.clientLeft - ball.offsetWidth/2;
    let y = event.clientY - containerRect.top - field.clientTop - ball.offsetHeight/2;

    ball.style.left = `${x}px`
    ball.style.top = `${y}px`
})
