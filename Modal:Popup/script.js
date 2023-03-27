// VARIABLES
const [modal, modalContent, btn, close] = ['.modal', '.modal-content', '.btn', '.close'].map(selector => document.querySelector(selector));


// Function definitions
const openModal = (e) => {
    e.preventDefault();
    modal.style.display = "block";
  };
  
  const closeModal = () => {
    modalContent.classList.add("slide-up");
  
    setTimeout(() => {
      modal.style.display = "none";
      modalContent.classList.remove("slide-up");
    }, 500);
  };
  
  // Event listeners
  btn.addEventListener("click", openModal);
  close.addEventListener("click", closeModal);
  modal.addEventListener("click", closeModal);
  

