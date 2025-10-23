const modalCloseBtn = document.getElementById('modalCloseBtn');
modalCloseBtn.addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});
const modal = document.getElementById('modal');
modal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.style.display = 'none';
    }
});
