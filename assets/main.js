document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.cta');
  if (button) {
    button.addEventListener('click', () => {
      window.location.href = 'mailto:bookings@canalstartup.nl?subject=Boat%20Tour%20Booking';
    });
  }
});
