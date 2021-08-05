const openModal = document.getElementById('modalBtn');
const closeBtn = document.querySelector('close-btn');
const modal = document.querySelector('modal-overlay');

openModal.addEventListener('click', function(){
    modal.classList.add('.open-modal');
});

closeBtn.addEventListener('click', function(){
    modal.classList.remove('.open-modal');
});