const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

//Controla a posição dos slides
let position = 1;

/*
  @return [div.item]
*/
const getAllImages = () => Array.from(document.querySelectorAll('.item')).map(img => img)

const nextImage = (arrImages) => {
  next.addEventListener('click', () => {
    if(position !== 0) arrImages[position - 1].classList.remove('active')
    arrImages[position].classList.add('active')
    position++
    positionEqualsZero(position, arrImages.length)
  })
}

const prevImage = (arrImages) => {
  prev.addEventListener('click', () => {
    console.log(position)
  })
}

const positionEqualsZero = (pos, arrLength) => {
  if(pos >= arrLength) position = 0
}

prevImage(getAllImages())
nextImage(getAllImages())