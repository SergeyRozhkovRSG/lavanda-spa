/*
  Логика модального окна записи (единый источник для всех страниц).
*/

const BOOKING_MODAL_ID = 'bookingModal';
const MAX_PROFILE_URL =
  'https://max.ru/u/f9LHodD0cOLDzA9kGm0ofpRMETIX8HJIJnSapUncv5Jq4c7Uwdf5_XCrf_E';

function ensureBookingModal() {
  if (document.getElementById(BOOKING_MODAL_ID)) {
    return;
  }

  const modal = document.createElement('div');
  modal.className = 'booking-modal';
  modal.id = BOOKING_MODAL_ID;
  modal.innerHTML = `
    <div class="booking-modal-content">
      <button type="button" class="booking-close">×</button>
      <h3>Записаться на процедуру</h3>
      <p>Выберите удобный способ связи</p>
      <a href="tel:+79298380501" class="booking-option">📞 Позвонить</a>
      <a href="#" class="booking-option max" id="maxLink">💬 Max</a>
      <a href="#" class="booking-option whatsapp" id="waLink">💬 WhatsApp</a>
      <a href="#" class="booking-option telegram" id="tgLink">✈️ Telegram</a>
    </div>
  `;

  document.body.appendChild(modal);

  const closeButton = modal.querySelector('.booking-close');
  if (closeButton) {
    closeButton.addEventListener('click', closeBooking);
  }
}

window.openBooking = function openBooking(button) {
  ensureBookingModal();

  const service = button?.dataset?.service || document.title;
  const message = `Хочу записаться на ${service}`;
  const encoded = encodeURIComponent(message);

  const waLink = document.getElementById('waLink');
  const tgLink = document.getElementById('tgLink');
  const maxLink = document.getElementById('maxLink');
  const modal = document.getElementById(BOOKING_MODAL_ID);

  if (waLink) {
    waLink.href = `https://wa.me/79298380501?text=${encoded}`;
  }

  if (tgLink) {
    tgLink.href = `https://t.me/Luiza_fox_foxy?text=${encoded}`;
  }

  if (maxLink) {
    maxLink.href = MAX_PROFILE_URL;
  }

  if (modal) {
    modal.style.display = 'flex';
  }
};

window.closeBooking = function closeBooking() {
  const modal = document.getElementById(BOOKING_MODAL_ID);
  if (modal) {
    modal.style.display = 'none';
  }
};

document.addEventListener('DOMContentLoaded', ensureBookingModal);
