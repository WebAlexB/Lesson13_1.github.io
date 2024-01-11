const formAlert = document.getElementById("form-alert");
const inputTitleAlert = document.getElementById("input-title");
const inputTextAlert = document.getElementById("input-text");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalClose = document.getElementById("modal-close");

formAlert.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = inputTitleAlert.value;
    const text = inputTextAlert.value;
    showAlert(title, text);
});

modalClose.addEventListener('click', function () {
    hideModal();
});

window.addEventListener('click', function (e) {
    if (e.target === modal) {
        hideModal();
    }
});

window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        hideModal();
    }
});
function showAlert(title, text) {
    if (!title.trim() || !text.trim()) {
        alert('Add text');
    } else {
        modalTitle.textContent = title;
        modalText.textContent = text;
        showModal();
    }
}

function showModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}