document.getElementById('btn-menu').addEventListener('click', function() {
  document.getElementById('menu').classList.toggle('hidden')
})

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  spaceBetween: 14,
  grabCursor: true,
  loop: true,
  slidesPerView: 'auto',
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },

  breakpoints: {
    0: {
      watchOverflow: true,
    },

    640: {
      watchOverflow: true,
    },

    768: {
      watchOverflow: true,
    },

    1024: {
      watchOverflow: false,
    },

    1280: {
      watchOverflow: false,
    },
  }
});


function removeAOS() {
  const AOS = document.querySelectorAll('[data-aos]')

  if (window.innerWidth <= 768) {
    AOS.forEach(function(remove) {
      remove.removeAttribute('data-aos')
    })
  }
}

window.addEventListener('load', removeAOS)