const board = document.querySelector('#board')

const SQUARES_NUMBER = 500 //генерируемое кол-во квадратиков

const colors = ['rgb(240, 154, 237)', 'rgb(106, 60, 214)', 'rgb(115, 215, 229)', 'white', 'rgb(240, 67, 171)'] // выбираем случайный цвет из массива

for (let i=0; i<SQUARES_NUMBER; i++) {
    const square = document.createElement('div') // создаем динамически хтмл элемент
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    }) // реагирует на наведение на квадратик

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    }) // реагирует на отведение от квадратика

    board.append(square) //вставляем на доску
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color //изменим стиль элементу (квадратику)
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` // светящийся эффект
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}