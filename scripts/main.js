




var askButton = document.querySelector('#ask-question');
var overlay = document.querySelector('#overlay');
var forms = document.querySelector('#modal');
var modalClose = document.querySelector('.form-java__img');

askButton.addEventListener('click', function() {
  overlay.classList.toggle('visible');
  forms.classList.toggle('opened');
});


overlay.addEventListener('click', function() {
  overlay.classList.remove('visible');
  forms.classList.remove('opened');
});

modalClose.addEventListener('click', function(){
  forms.classList.remove('opened');
  overlay.classList.remove('visible');
});