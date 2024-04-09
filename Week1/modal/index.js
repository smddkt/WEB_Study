
const modal = document.querySelector('.modal');
const openModal = document.querySelector(".openModal");
const closeModal = document.querySelector(".closeModal");
const modal_background = document.querySelector('.modal_background');

openModal.addEventListener("click", ()=>{
    modal.style.display = "block";
    modal_background.style.display = "block";
});


closeModal.addEventListener("click", ()=>{
    modal.style.display = "none";
    modal_background.style.display = "none";
});
