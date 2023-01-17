// Toggle mobile menu
function togglePhoneMenu() {
    const bg        = document.getElementById("phone-bg");
    const slideover = document.getElementById("phone-slideover");
    const closebtn  = document.getElementById("phone-close-btn");
  
    const bgClasses = [
      "opacity-100", "opacity-0", "hidden"
    ]
  
    const slideOver = [
      "translate-x-full", "translate-x-0"
    ]
  
    const closeBtn = [
      "opacity-100", "opacity-0"
    ]
  
    bgClasses.forEach(element => {
      bg.classList.toggle(element);
    });
  
    slideOver.forEach(element => {
      slideover.classList.toggle(element);
    });
  
    closeBtn.forEach(element => {
      closebtn.classList.toggle(element);
    });
}

// drop snow
var duration = 150 * 1000000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = 10;

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#ffffff'],
    shapes: ['circle'],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}());

