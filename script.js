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

// ===================
// Agendar: multi-calendario
// ===================

const eventData = {
  title: "Fiesta de Empresa",
  description: "Confirmá tu asistencia y sumate a la fiesta.",
  location: "Ruta Nacional 205 Km114,5, B7240 Lobos, Provincia de Buenos Aires",
  start: "2026-09-26T21:00:00-03:00",
  end:   "2026-09-27T02:00:00-03:00"
};

function formatUTC(dateStr) {
  return new Date(dateStr).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function formatISO(dateStr) {
  return new Date(dateStr).toISOString();
}


function abrirGoogle(e) {
  e.preventDefault();
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE`
    + `&text=${encodeURIComponent(eventData.title)}`
    + `&dates=${formatUTC(eventData.start)}/${formatUTC(eventData.end)}`
    + `&details=${encodeURIComponent(eventData.description)}`
    + `&location=${encodeURIComponent(eventData.location)}`;
  window.open(url, "_blank");
}

function abrirOutlook(e) {
  e.preventDefault();
  const url = `https://outlook.live.com/calendar/0/deeplink/compose`
    + `?path=/calendar/action/compose&rru=addevent`
    + `&startdt=${formatISO(eventData.start)}`
    + `&enddt=${formatISO(eventData.end)}`
    + `&subject=${encodeURIComponent(eventData.title)}`
    + `&location=${encodeURIComponent(eventData.location)}`
    + `&body=${encodeURIComponent(eventData.description)}`;
  window.open(url, "_blank");
}

function abrirYahoo(e) {
  e.preventDefault();
  const start = new Date(eventData.start);
  const end = new Date(eventData.end);
  const durMs = end - start;
  const durH = String(Math.floor(durMs / 3600000)).padStart(2, "0");
  const durM = String(Math.floor((durMs % 3600000) / 60000)).padStart(2, "0");

  const url = `https://calendar.yahoo.com/?v=60&view=d&type=20`
    + `&title=${encodeURIComponent(eventData.title)}`
    + `&st=${formatUTC(eventData.start)}`
    + `&dur=${durH}${durM}`
    + `&desc=${encodeURIComponent(eventData.description)}`
    + `&in_loc=${encodeURIComponent(eventData.location)}`;
  window.open(url, "_blank");
}

function descargarICS(e) {
  e.preventDefault();
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `DTSTART:${formatUTC(eventData.start)}`,
    `DTEND:${formatUTC(eventData.end)}`,
    `SUMMARY:${eventData.title}`,
    `DESCRIPTION:${eventData.description}`,
    `LOCATION:${eventData.location}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "evento.ics";
  link.click();
}
function toggleAgendarMenu(e) {
  e.stopPropagation();
  document.getElementById("agendarDropdown").classList.toggle("abierto");
}

document.addEventListener("click", function () {
  const menu = document.getElementById("agendarDropdown");
  if (menu) menu.classList.remove("abierto");
});