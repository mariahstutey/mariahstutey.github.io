
const modal = document.getElementById('imageModal');
const openPopup = document.getElementById('openPopup');
const closeBtn = document.querySelector('.close');

openPopup.addEventListener('click', () => modal.style.display = 'flex');
closeBtn.addEventListener('click', () => modal.style.display = 'none');

