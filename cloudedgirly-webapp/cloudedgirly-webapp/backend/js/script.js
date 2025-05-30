// script.js (adicione funcionalidades JS aqui, se quiser) 

document.getElementById('toggle-qr').addEventListener('click', function() {
  const qr = document.getElementById('qr-container');
  if (qr.style.display === 'none') {
    qr.style.display = 'block';
    this.textContent = 'Ocultar QR Instagram';
  } else {
    qr.style.display = 'none';
    this.textContent = 'Mostrar QR Instagram';
  }
});