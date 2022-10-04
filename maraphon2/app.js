const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart) //когда начали перетаскивание
item.addEventListener('dragend', dragend) //когда закончили перетаскивание

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover) //вызывается когда элемент находится над плейсхолдером
    placeholder.addEventListener('dragenter', dragenter) //когда заходим на територию
    placeholder.addEventListener('dragleave', dragleave) //когда перетащили но вышли
    placeholder.addEventListener('drop', dragdrop) //когда отпустили
}

function dragstart(event) {
    console.log('drag start',event.target) //event.target сам элемент
    event.target.classList.add('hold') //добавляем класс элементу
    setTimeout(() => event.target.classList.add('hide') , 0)
    
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
    event.preventDefault()
}
function dragenter(event) {
    event.target.classList.add('hovered')
}
function dragleave(event) {
    event.target.classList.remove('hovered')
}
function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item) //переместили наш элемент item в плейсхолдер
}


