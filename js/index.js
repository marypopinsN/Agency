// найти нужные узлы
const popupButton = document.querySelector('.popup-menu__button');
const popupWrapper = document.querySelector('.popup-menu');
const popupMenu = document.querySelector('.popup-menu__list');

// выполняем функцию клика по кнопке

popupButton.addEventListener('click', handleMenu);

// функция, которая показывает и скрывает поп-ап меню

function handleMenu() {
    popupMenu.classList.toggle('hide-popup');
}
// функция при клике на любое место экрана
document.addEventListener('click', hidePopup);

function hidePopup(el) {
// проверяем, есть ли внутри того, по чему кликнули поп-ап меню или кнопка
    let targetInside = popupWrapper.contains(el.target);
    // если нет, то прячем меню

    if(!targetInside) {
        popupMenu.classList.add('hide-popup');
    }
else {
    return;
}

}

