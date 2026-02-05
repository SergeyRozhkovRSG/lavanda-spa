/*
  Основной JS сайта Lavanda SPA.
  Здесь собраны общие функции и обработчики для разных страниц.
*/

/* Глобальные функции для inline-обработчиков (onclick / onsubmit) */
window.openBooking = function openBooking(button) {
  const service = button?.dataset?.service || document.title;
  const message = `Хочу записаться на ${service}`;
  const encoded = encodeURIComponent(message);

  const waLink = document.getElementById('waLink');
  const tgLink = document.getElementById('tgLink');
  const maxLink = document.getElementById('maxLink');
  const modal = document.getElementById('bookingModal');

  if (waLink) {
    waLink.href = `https://wa.me/79298380501?text=${encoded}`;
  }

  if (tgLink) {
    tgLink.href = `https://t.me/Luiza_fox_foxy?text=${encoded}`;
  }

  if (maxLink) {
    maxLink.href = `https://max.ru/79298380501?text=${encoded}`;
  }

  if (modal) {
    modal.style.display = 'flex';
  }
};

window.closeBooking = function closeBooking() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.style.display = 'none';
  }
};

window.sendWhatsApp = function sendWhatsApp(event) {
  event.preventDefault();

  const serviceInput = document.getElementById('service');
  const phoneInput = document.getElementById('phone');
  const service = serviceInput ? serviceInput.value : '';
  const phone = phoneInput ? phoneInput.value : '';

  const text = `Здравствуйте! Хочу записаться.%0AУслуга: ${service}%0AТелефон: ${phone}`;
  window.open(`https://wa.me/79298380501?text=${text}`, '_blank');
};

window.orderCert = function orderCert(name) {
  const text = `Здравствуйте! Хочу приобрести ${name}`;
  window.open(`https://wa.me/79298380501?text=${encodeURIComponent(text)}`, '_blank');
};

window.orderSpa = function orderSpa(name) {
  const serviceName = name || 'SPA-программу';
  const text = `Здравствуйте! Хочу записаться на ${serviceName}`;
  window.open(`https://wa.me/79298380501?text=${encodeURIComponent(text)}`, '_blank');
};

window.orderPromo = function orderPromo(name) {
  const text = `Здравствуйте! Хочу записаться по акции: ${name}`;
  window.open(`https://wa.me/79298380501?text=${encodeURIComponent(text)}`, '_blank');
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
