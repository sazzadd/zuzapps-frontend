// infinite image slider
function infiniteImgSlider() {
  const track = document.getElementById('sliderTrack');

  if (!track) return;

  track.innerHTML += track.innerHTML;

  // const totalWidth = track.scrollWidth / 2;
  // const speed = 10;
  // const duration = totalWidth / speed;

  // track.style.animationDuration = duration + 's';
}


// Swiper Slider Initialization

const sliderFunction = () => {
  const slider = document.querySelector('.mySwiper');

  if (!slider) return; // safety check

  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 800,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  console.log(swiper);
};

// Footer Year Update
function setCurrentYear() {
  const yearElement = document.getElementById('currentYear');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Initialize functions

infiniteImgSlider();
sliderFunction();
setCurrentYear();
