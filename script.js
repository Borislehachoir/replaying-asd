
import { animate, createAnimatable, createDraggable } from 'https://cdn.jsdelivr.net/npm/animejs@4/+esm';

// Effet survol sur les boutons

document.querySelectorAll('#audio img, #bouton-jeu img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        animate(img, {
            scale: 1.1,
            rotate: '5deg',
            filter: 'drop-shadow(5px 8px 5px rgba(0,0,0,0.3))',
            duration: 300,
            ease: 'outQuad'
        });
    });

    img.addEventListener('mouseleave', () => {
        animate(img, {
            scale: 1,
            rotate: '0deg',
            filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))',
            duration: 300,
            ease: 'outQuad'
        });
    });
});

const note = document.querySelector('#poeme');

const papier = createAnimatable(note, {
    rotate: { duration: 500, ease: 'out(3)' },
    y: { duration: 500, ease: 'out(3)' }
});

note.addEventListener('mousemove', e => {
    const rect = note.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;

    papier.rotate(x * 12);
    papier.y(-5);
});

note.addEventListener('mouseleave', () => {
    papier.rotate(0);
    papier.y(0);
});

// mettre le son sur pause
const dialog = document.querySelector('dialog');
const audio = dialog.querySelector('audio');

dialog.addEventListener('close', () => audio.pause());


// button to change mode to increase accessibility for neurodivergent ppl
const boutonDys = document.querySelector('#switch-dys');

boutonDys.addEventListener('click', () => {
  const actif = document.body.classList.toggle('dys');
  boutonDys.setAttribute('aria-checked', actif);

  animate(boutonDys, {
    x: actif ? 56 : 0,
    duration: 300,
    ease: 'outQuad'
  });
});

// Déplacement du bloc entier avec Anime.js
createDraggable('.dys-switch', {
  trigger: '.dys-switch span',
  container: document.body
});


// gestion WebGL

// section pour une animation de loading si jugé pertinent et par Marina et par le personnel enseignant qui nous accompagne

// yolo
