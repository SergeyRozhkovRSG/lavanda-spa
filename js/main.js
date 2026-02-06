/*
  Основной JS сайта Lavanda SPA.
  Здесь собраны общие функции и обработчики для разных страниц.
*/

/* Глобальные функции для inline-обработчиков (onclick / onsubmit) */
window.sendWhatsApp = function sendWhatsApp(event) {
  event.preventDefault();

  const serviceInput = document.getElementById('service');
  const phoneInput = document.getElementById('phone');
  const service = serviceInput ? serviceInput.value : '';
  const phone = phoneInput ? phoneInput.value : '';

  const text = `Здравствуйте! Хочу записаться.%0AУслуга: ${service}%0AТелефон: ${phone}`;
  window.open(`https://wa.me/79298380501?text=${text}`, '_blank');
};

/* DOM-логика после загрузки страницы */
document.addEventListener('DOMContentLoaded', () => {
  // Бургер-меню
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
      burger.classList.toggle('open');
    });
  }

  // FAQ accordion
  const faqButtons = document.querySelectorAll('.faq-question');
  if (faqButtons.length) {
    faqButtons.forEach(button => {
      button.addEventListener('click', () => {
        const item = button.parentElement;

        document.querySelectorAll('.faq-item').forEach(el => {
          if (el !== item) {
            el.classList.remove('active');
          }
        });

        item.classList.toggle('active');
      });
    });
  }
});
