document.querySelector('#items')
  .addEventListener('wheel', event => {
    if(event.deltaY > 0){
      event.target.scollBY(300, 0)
    }else {
      event.target.scollBY(-300, 0)
    }
  })