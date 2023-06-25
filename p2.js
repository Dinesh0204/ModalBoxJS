'use strict'



const allButtons = document.querySelectorAll('.btn');


const butCloseModal = function () {
    document.querySelector('.content').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
}
const showModal = function () {
    document.querySelector('.content').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
}

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', showModal);
}
document.querySelector('.close').addEventListener('click', butCloseModal);
document.querySelector('.overlay').addEventListener('click', butCloseModal);
document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape') {
        butCloseModal();
    }
})