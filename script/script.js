document.querySelector('#items')
  .addEventListener('wheel', event => {
    if(event.deltaY > 0){
      event.target.scrollBy(300, 0)
    }else {
      event.target.scrollBy(-300, 0)
    }
  })

  document.querySelector('.item')
    .addEventListener('click', event => {
      console.log(event.target)
    })