void function() {
  const sliderBlock = document.querySelector('.i-TopSlider__slider');
  if (!sliderBlock) return null;
  new Swiper(sliderBlock, {
    navigation: {
      prevEl: '.i-TopSlider__arrow_left',
      nextEl: '.i-TopSlider__arrow_right',
    },
    pagination: {
      el: '.i-TopSlider__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="i-TopSlider__pag ' + className + '">0' + (index + 1) + '</div>';
      },
    },
  })
}()

void function() {
  const sliderBlock = document.querySelector('.Partners__slider_container');
  if (!sliderBlock) return null;
  new Swiper(sliderBlock, {
    slidesPerView: 5,
    spaceBetween: 60,
    navigation: {
      prevEl: '.Partners__button_prev',
      nextEl: '.Partners__button_next',
    },
    breakpoints: {
      // when window width is <= 320px
      1000: {
        slidesPerView: 4,
      },
      667: {
        slidesPerView: 2,
      },
    }
  })
}()

const mobileMenu = () => {
  const hamburger = document.querySelector('.Mobile__hamburger');
  const close = document.querySelector('.Mob-menu__close');
  const menu = document.querySelector('.Mob-menu');
  const items = [...document.querySelectorAll('.Mob-menu__item')];
  items.forEach( el => el.onclick = () => menu.style.transform = '');
  hamburger.onclick = () => (menu.style.transform = 'translateX(-100%)', document.body.style.overflow='hidden')
  close.onclick = () => (menu.style.transform = '', document.body.style.overflow='')
}
mobileMenu()
