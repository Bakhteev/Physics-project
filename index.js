// const nextBtn = document.querySelector('#next')
// const prevBtn = document.querySelector('#prev')

// nextBtn.addEventListener('click', next)
// prevBtn.addEventListener('click', prev)

// let pos = window.innerHeight

// function next(e) {
//   window.scroll(0, (pos *= 2))
//   console.log(pos)
// }

// function prev(e) {
//   window.scroll(0, (pos /= 2))
// }

import Swiper, {
  Navigation,
  Pagination,
  EffectCoverflow,
  EffectCube,
  EffectFade,
  EffectFlip,
  EffectCreative,
  EffectCards,
  Controller,
  Lazy,
} from 'swiper'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

Swiper.use([Pagination, Lazy])

const swiper = new Swiper('.mySwiper', {
  lazy: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: { enabled: true, onlyInViewport: false },
  speed: 600,
  effect: 'slide',
  // direction: 'vertical',
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') swiper.slideNext()
  if (e.key === 'ArrowLeft') swiper.slidePrev()
})
