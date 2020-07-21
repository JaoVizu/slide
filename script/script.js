const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

//Controla a posição dos slides
let position = 0;

/*
  @return [div.item]
*/

const getAllImages = [...document.querySelectorAll('.item')]

const nextImage = () => {
  if(position === (getAllImages.length - 1)) position = 0

  getAllImages[position].classList.remove('active')
  position++;
  getAllImages[position].classList.add('active')
  
}

const prevImage = () => {
  getAllImages[position].classList.remove('active')
  if(position === 0) position = getAllImages.length
  position--;
  getAllImages[position].classList.add('active')
  
  
}

next.addEventListener('click', nextImage)
prev.addEventListener('click', prevImage)