const myHomeButton = document.querySelector('.hide-navicon-button')

myHomeButton.addEventListener('click',() => {
  toggleHide(document.querySelector('.hide-list'))
});

function toggleHide(element){
  element.classList.toggle('show-list');
}