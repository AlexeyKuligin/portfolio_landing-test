const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');
    overlay = document.querySelector('.menu__overlay'); // Закрытие при клике на overlay

    hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

    close.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Закрытие при клике на overlay
    overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        menu.classList.remove('active');
    }
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });

/*     document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.skills__ratings-item');

  items.forEach(item => {
    const counter = item.querySelector('.skills__ratings-counter');
    const line = item.querySelector('.skills__ratings-line span');

    if (counter && line) {
      // Извлекаем число и ограничиваем его от 0 до 100
      let value = parseInt(counter.textContent, 10);
      value = Math.min(Math.max(value, 0), 100);
      
      line.style.width = '${value}%';
    }
  });
}); */