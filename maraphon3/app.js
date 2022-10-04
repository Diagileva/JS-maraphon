const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

let activeSlideIndex = 0

sidebar.style.top =`-${(slidesCount-1)*100}vh` //правая и левая часть расположенны противоположно, нужно чтобы они совпали

//переменная, кот позволяет следить какой слайд активный

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount-1
        }
    }

    const height = container.clientHeight //вычислили размер экрана
    mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)` //перемещаем слайд
    sidebar.style.transform = `translateY(${activeSlideIndex*height}px)` //перемещаем сайдбар, без минуса так как в другую сторону

}