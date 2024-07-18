<script>
document.addEventListener('DOMContentLoaded', function() {
  const includingTaxesElement = document.querySelector('.including-taxes');

  if (includingTaxesElement) {
    // Create the modal background element
    const modalBackground = document.createElement('div');
    modalBackground.id = 'modal-background';
    modalBackground.classList.add('modal-background');

    // Create the modal element
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.classList.add('modal');
    modal.innerHTML = `
      <p>Total prices now include taxes & fees, so you won't have any surprises at checkout</p>
      <button id="close-modal" class="close-modal">X</button>
    `;

    // Append modal and background to the body
    document.body.appendChild(modalBackground);
    document.body.appendChild(modal);

    const closeModal = document.getElementById('close-modal');

    // Function to show modal and background
    const showModal = () => {
      modal.style.display = 'block';
      modalBackground.style.display = 'block';
    };

    // Function to hide modal and background
    const hideModal = () => {
      modal.style.display = 'none';
      modalBackground.style.display = 'none';
    };

    includingTaxesElement.addEventListener('mouseenter', showModal);
    closeModal.addEventListener('click', hideModal);
    modalBackground.addEventListener('click', hideModal);
  }
});
</script>
