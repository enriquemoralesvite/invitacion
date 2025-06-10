function mostrarAmor() {
  document.getElementById('emoji').style.display = 'block';
  document.getElementById('musica').play(); // Activar música tras clic
}

function moverBoton() {
  const noBtn = document.getElementById('noBtn');
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

document.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.getElementById('noBtn');
  noBtn.addEventListener('mouseover', moverBoton);

  // Corazones flotantes automáticos
  setInterval(() => {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.textContent = '💖';
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.animationDuration = (3 + Math.random() * 2) + 's';
    document.getElementById('corazones').appendChild(corazon);

    // Eliminar el corazón después de animarse
    setTimeout(() => {
      corazon.remove();
    }, 5000);
  }, 300);
});
