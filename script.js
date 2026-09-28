const toast = document.querySelector('#toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

document.querySelectorAll('[data-toast]').forEach((button) => {
  button.addEventListener('click', () => showToast(button.dataset.toast));
});

document.querySelector('#toggle-balance').addEventListener('click', (event) => {
  const balance = document.querySelector('#balance');
  const hidden = balance.dataset.hidden === 'true';
  balance.innerHTML = hidden ? '$24,586<span>.32</span>' : '••••••<span>••</span>';
  balance.dataset.hidden = String(!hidden);
  event.currentTarget.setAttribute('aria-label', hidden ? 'Hide balance' : 'Show balance');
});

document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.nav-item.active')?.classList.remove('active');
    item.classList.add('active');
  });
});
