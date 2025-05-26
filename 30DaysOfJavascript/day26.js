const modalOverlay = document.getElementById("modalOverlay");

const closeModal = () => {
  modalOverlay.style.display = "none";
};
const openModal = () => {
  modalOverlay.style.display = "flex";
};

const handleOverlayClick = (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
};
