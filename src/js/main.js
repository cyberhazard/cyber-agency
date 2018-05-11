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
