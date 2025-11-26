const containers = document.querySelectorAll('.image-container');

// تشخیص اینکه دستگاه تاچ هست یا نه
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

containers.forEach(container => {

  const link = container.querySelector('a');

  if (isTouchDevice) {

    // 📱 موبایل: با تأخیر و افکت وارد لینک شود
    container.addEventListener('click', (e) => {
      e.preventDefault(); // جلوگیری از رفتن فوری

      container.classList.add('hovered');

      setTimeout(() => {
        window.location.href = link.href;
      }, 1200); // مدت زمان افکت قبل از رفتن
    });

  } else {

    // 💻 دسکتاپ: رفتار طبیعی کلیک + hover
    container.addEventListener('mouseenter', () => {
      container.classList.add('hovered');
    });

    container.addEventListener('mouseleave', () => {
      container.classList.remove('hovered');
    });

    // کلیک بدون تأخیر
    container.addEventListener('click', () => {
      container.classList.remove('hovered');
    });
  }

});
