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

// Counter animation function
function startCounterAnimation() {
  // Select all counter number elements
  document.querySelectorAll('.counter-number').forEach((el) => {
    // Get target number from data-target
    let target = Number(el.dataset.target);

    // Get suffix like +, %, /7
    let suffix = el.dataset.suffix || '';

    // Get decimal value if needed
    let decimal = Number(el.dataset.decimal) || 0;

    // Counter starts from 0
    let count = 0;

    // Animation speed
    let speed = target / 80;

    // Run counter animation
    let counter = setInterval(() => {
      count += speed;

      // Stop counter when it reaches target
      if (count >= target) {
        count = target;
        clearInterval(counter);
      }

      // Update text content
      el.textContent = count.toFixed(decimal) + suffix;
    }, 20);
  });
}

// Initialize functions

infiniteImgSlider();
sliderFunction();
setCurrentYear();
startCounterAnimation();
