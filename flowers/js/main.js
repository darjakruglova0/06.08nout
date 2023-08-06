
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('#site-navigation-mobile');

burger.addEventListener('click', function(){
	burger.classList.toggle('active');
	menu.classList.toggle('active');

});

var clicked = '' //переменная для сохранения закрывающегося элемента
document.addEventListener('click', e => { //можно вешать и не на документ
	const targetId = e.target.getAttribute('data-target') || '' // достаем id элемента
	if(!targetId) return // если его нет, выходим из скрипта
	const target = document.getElementById(targetId) // ссылка на сам элемент
	if(clicked && clicked !== target) clicked.classList.remove('open') 
	//если это не первое открытие и не 2ой раз открывается текущий, то скрываем
	target.classList.add('open')
	clicked = target //сохраняем ссылку в замыкании
})



  // Modal

  const modalTrigger = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal'),
  modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
  btn.addEventListener('click', function() {
	  modal.classList.add('show');
	  modal.classList.remove('hide');
	  // Либо вариант с toggle - но тогда назначить класс в верстке
	  document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  // Либо вариант с toggle - но тогда назначить класс в верстке
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
	  closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modal.classList.contains('show')) { 
	  closeModal();
  }
});