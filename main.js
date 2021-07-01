const btn_down = document.querySelector('.down-button')
const btn_up = document.querySelector('.up-button')

const sideBar = document.querySelector('.sidebar')

const mainSlide = document.querySelector('.main-slide')
const countSlide = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sideBar.style.top = `-${(countSlide - 1) * 100}vh`

btn_up.addEventListener('click', () => {
  changeSlide('up')
})

btn_down.addEventListener('click', () => {
  changeSlide('down')
})

function changeSlide(direction) {
  if (direction == 'up') {
    activeSlideIndex++ 
    countSlide == activeSlideIndex? activeSlideIndex = 0 : activeSlideIndex
  }
  if (direction == 'down') {
    activeSlideIndex--
    activeSlideIndex = activeSlideIndex < 0 ? countSlide - 1: activeSlideIndex
  }

  const height = document.querySelector('.container').offsetHeight
  console.log(height);
  
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
  sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
  
}