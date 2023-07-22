const slideContainer = document.querySelector('.container')
const slides = document.querySelectorAll('.slide')

slideContainer.addEventListener('click', function (e) {
  slides.forEach((slide) => slide.classList.remove('active'))
  e.target.classList.add('active')
})
