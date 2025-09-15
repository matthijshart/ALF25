document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.cta');
  if (button) {
    button.addEventListener('click', () => {
      window.location.href = 'mailto:bookings@canalstartup.nl?subject=Boat%20Tour%20Booking';
    });
  }

  const galleryEl = document.querySelector('#gallery');
  if (galleryEl && window.Swiper) {
    new Swiper(galleryEl, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
});
