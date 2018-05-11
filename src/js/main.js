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


const callbackPopup = () => {
  const popup = document.querySelector('#CallbackPopup');
  const triggerButton = document.querySelector('.Header__callback');
  const closeButton = document.querySelector('#CallbackPopup-close');
  const form = document.querySelector('#CallbackPopup-form');
  const checkbox = document.querySelector('#CallbackPopup-checkbox');


  const removeScroll = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = (innerWidth - document.body.clientWidth) + 'px';
  }

  const addScroll = () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  const prevent = e => {
    e.preventDefault();
    if(!checkbox.checked){
      alert('Согласитесь с обработкой персональных данных')
    } else {
      fetch('/mail.php', {
        method: 'POST',
        body: new FormData(form)
      })
      .then(function() {
        closePopup(), alertify.success('Ваша заявка отправленна'), form.reset();
      })
      .catch(function (error) {
        alertify.error("Ошибка. Повторите отправку позже");
      });
    }
  }
  const openPopup = e => {
    popup.style.display = 'flex';
    removeScroll();
    window.addEventListener('keydown', listenKeys);
    setTimeout(() => popup.style.opacity = 1, 0)
  }

  const listenKeys = e => {
    if (e.keyCode === 27) {
      closePopup();
    }
  }

  const closePopup = e => {
    popup.style.opacity = '';
    popup.addEventListener('transitionend', function end() {
      form.reset();
      popup.style.display = '';
      popup.removeEventListener('transitionend', end)
      addScroll();
      window.removeEventListener('keydown', listenKeys);
    })
  }

  triggerButton.addEventListener('click', openPopup);
  closeButton.addEventListener('click', closePopup);
  form.addEventListener('submit', prevent);

}
callbackPopup();

const mailPopup = () => {
  const popup = document.querySelector('#mailPopup');
  const triggerButton = document.querySelectorAll('.mail');
  const closeButton = document.querySelector('#mailPopup-close');
  const form = document.querySelector('#mailPopup-form');
  const checkbox = document.querySelector('#mailPopup-checkbox');


  const removeScroll = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = (innerWidth - document.body.clientWidth) + 'px';
  }

  const addScroll = () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  const prevent = e => {
    e.preventDefault();
    if(!checkbox.checked){
      alert('Согласитесь с обработкой персональных данных')
    } else {
      fetch('/mail.php', {
        method: 'POST',
        body: new FormData(form)
      })
      .then(function() {
        closePopup(), alertify.success('Ваша заявка отправленна'), form.reset();
      })
      .catch(function (error) {
        alertify.error("Ошибка. Повторите отправку позже");
      });
    }
  }
  const openPopup = e => {
    popup.style.display = 'flex';
    removeScroll();
    window.addEventListener('keydown', listenKeys);
    setTimeout(() => popup.style.opacity = 1, 0)
  }

  const listenKeys = e => {
    if (e.keyCode === 27) {
      closePopup();
    }
  }

  const closePopup = e => {
    popup.style.opacity = '';
    popup.addEventListener('transitionend', function end() {
      form.reset();
      popup.style.display = '';
      popup.removeEventListener('transitionend', end)
      addScroll();
      window.removeEventListener('keydown', listenKeys);
    })
  }

  triggerButton.forEach(el=>{
    el.addEventListener('click', openPopup);
  });
  closeButton.addEventListener('click', closePopup);
  form.addEventListener('submit', prevent);

}
mailPopup();
