/* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);


/* **** banner**** */
class typeWriting {
  constructor(a) {
      this.element = a, this.words = JSON.parse(a.getAttribute('data-words')),
          this.speed = parseInt(a.getAttribute('data-speed'), 10) ||
          100, this.delay = parseInt(a.getAttribute('data-delay'), 10) ||
          1e3, this.loop = a.getAttribute('data-loop'), this.char = '',
          this.counter = 0, this.isDeleting = !1, this.type()
  }
  type() {
      const a = 'yes' === this.loop ?
          this.counter % this.words.length : this.counter, b = this.words[a];
      let c = this.speed; if (this.isDeleting ? (c /= 2, this.char = b.substring(0, this.char.length - 1)) : this.char = b.substring(0, this.char.length + 1), this.element.innerHTML = `<span class="write">${this.char}</span><span class="blinking-cursor">|</span>`, !this.isDeleting && this.char === b) { if ('no' === this.loop && this.counter >= this.words.length - 1) return; this.isDeleting = !0, c = this.delay } else this.isDeleting && '' === this.char && (this.isDeleting = !1, this.counter++); setTimeout(() => this.type(), c)
  }
} document.addEventListener('DOMContentLoaded', init); function init() {
  document.querySelectorAll('.typewrite').forEach(a => new typeWriting(a))
}

/* ********** cuenta regresiva ********** */

const countdown = document.getElementById("countdown");
const eventDate = new Date("2026-09-26T21:00:00").getTime();

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(interval);
    countdown.innerHTML = "¡Ya comenzó la fiesta!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    <div class="countdown-item">
      <span class="countdown-number">${days}</span>
      <span class="countdown-label">días</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-number">${hours}</span>
      <span class="countdown-label">hs</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-number">${minutes}</span>
      <span class="countdown-label">min</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-number">${seconds}</span>
      <span class="countdown-label">seg</span>
    </div>
  `;
}, 1000);


/* ********** musica ********** */
document.addEventListener('DOMContentLoaded', function() {
  const musicBtn = document.querySelector('.music-btn');
  const audio = document.getElementById('bg-music');
  let playing = false;

  musicBtn.addEventListener('click', function() {
    if (!playing) {
      audio.play();
      playing = true;
      musicBtn.classList.add('playing');
    } else {
      audio.pause();
      playing = false;
      musicBtn.classList.remove('playing');
    }
  });
});

// ===================
// Modales: Dress Code
// ===================

function abrirModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'block';
  }
}

function cerrarModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Cierra el modal si el usuario hace clic fuera del contenido
window.addEventListener('click', function(event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

function enviarFormulario() {
  setTimeout(() => {
    alert('¡Gracias por tu respuesta!');
  }, 300);
}
// =================== //