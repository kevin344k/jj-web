/*modal */

const modalAlertScam = document.getElementById("modalAlertScam");
const close_alert_scam=document.querySelector('.close-alert-scam')
const boton_modal_antiscam=document.querySelector('.boton-modal-antiscam')
// Get the button that opens the modal

// When the user clicks on <span> (x), close the modal
close_alert_scam.onclick = function () {
  modalAlertScam.style.display = "none";
};

boton_modal_antiscam.onclick = function () {
  modalAlertScam.style.display = "none";
};


window.addEventListener('load',()=>{
 modalAlertScam.style.display = "block";
})



// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modalAlertScam.style.display = "none";
  }
};
//esto detecta el scroll hacia abajo y hace aparecer el boton de scroll to top
window.addEventListener('scroll', () => {
  const btn = document.querySelector('.but-floating');
  if (window.scrollY > 50) {
    btn.style.display='flex';
     btn.classList.remove('hidden');
  } else {

 btn.classList.add('hidden');
  }
});