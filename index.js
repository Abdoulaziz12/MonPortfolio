const MenuToggle=document.querySelector('.menu-toggle');
const NavLinks=document.querySelector('.nav-links');

MenuToggle.addEventListener('click',()=>{
    NavLinks.classList.toggle('active');
});


window.addEventListener('DOMContentLoaded', () => {
    // Sélectionne les sections à animer
    const sections = document.querySelectorAll('.hero, .about, .skills, .compétences, .contact-form');
    sections.forEach((section, i) => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 1s';
        setTimeout(() => {
            section.style.opacity = 1;
        }, 400 * i);
    });
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});

const boxx= document.querySelectorAll('.box');
boxx.forEach(box => {
    box.addEventListener('mouseover', () => {
    box.style.transform = 'scale(1.05)';
    box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
        box.style.boxShadow = 'none';
    });
});