const startBtn = document.querySelector("#start")
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['rgb(240, 154, 237)', 'rgb(106, 60, 214)', 'rgb(115, 215, 229)', 'white', 'rgb(240, 67, 171)']
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => { //повесили слушатель не на каждую кнопку а на один верхний элемент
    if (event.target.classList.contains('time-btn')) { //проверяет если у эл-та есть класс бтн, то означает что это есть кнопка
        time = parseInt(event.target.getAttribute('data-time')) //вытащили время в каждой кнопке по data-time
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) { //момент когда нажимаем на кружочек
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {    
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame() 
    } else {
        let current = --time
        if (current<10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide') //удалили h3 с фразой ЭосталосьЭ
    board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    circle.classList.add('circle')

    const size = getRandomNumber(10,60)
    const {width,height} = board.getBoundingClientRect() //инфо о размерах доски и тп, получаем через деструкт
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const color = getRandomColor()

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`

    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    circle.style.background = color
    circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

    board.append(circle) //вставляем кружок на доску
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

