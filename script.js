// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Loading animation
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    loading.style.display = 'none';
});

// Custom cursor animation
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
    
    gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3
    });
});

// Hover effect for links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        cursorFollower.classList.add('cursor-hover');
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        cursorFollower.classList.remove('cursor-hover');
    });
});

// Parallax effect for hero section
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    gsap.to('.hero-content', {
        x: moveX,
        y: moveY,
        duration: 0.5
    });
});

// Typewriter effect
const typewriterText = document.querySelector('.typewriter');
const text = typewriterText.textContent;
typewriterText.textContent = '';

let charIndex = 0;
function typeWriter() {
    if (charIndex < text.length) {
        typewriterText.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

// Scroll indicator animation
gsap.to('.scroll-indicator .mouse', {
    y: 10,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

// Active navigation link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        navToggle.classList.remove('active');
    });
});

// Reveal elements on scroll
const revealElements = document.querySelectorAll('.skill-card, .project-card, .contact-item');

const reveal = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Initial check

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    
    // Initial animations
    gsap.from('.hero-content h1', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out'
    });
    
    gsap.from('.social-links a', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.2,
        delay: 1
    });
});

// Menu Toggle
const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('.nav__toggle');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('show-menu');
});

// Active Link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__link[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav__link[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Close menu when clicking a nav link
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu');
    navToggle.classList.remove('show-menu');
}

navLinks.forEach(n => n.addEventListener('click', linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.querySelector('.header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class
    if(this.scrollY >= 80) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 560 viewport height, add the show-scroll class
    if(this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal('.home__content', {})
sr.reveal('.home__img', {delay: 500})
sr.reveal('.home__social', {delay: 600})
sr.reveal('.about__content', {interval: 100})
sr.reveal('.skills__content', {interval: 100})
sr.reveal('.education__content', {interval: 100})
sr.reveal('.contact__content', {interval: 100})

/*==================== TYPED.JS ====================*/
const typed = new Typed('.home__subtitle', {
    strings: ['Full Stack Developer', 'Web Developer', '.NET Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
})

/*==================== SMOOTH SCROLL ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const targetId = this.getAttribute('href')
        const targetSection = document.querySelector(targetId)
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            })
        }
    })
})

/*==================== SKILLS HOVER EFFECT ====================*/
const skillsNames = document.querySelectorAll('.skills__name')

skillsNames.forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)'
    })
    
    skill.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)'
    })
})

/*==================== CONTACT BUTTON ANIMATION ====================*/
const contactButtons = document.querySelectorAll('.contact__button')

contactButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        const arrow = this.querySelector('.fas.fa-arrow-right')
        if (arrow) {
            arrow.style.transform = 'translateX(5px)'
        }
    })
    
    button.addEventListener('mouseleave', function() {
        const arrow = this.querySelector('.fas.fa-arrow-right')
        if (arrow) {
            arrow.style.transform = 'translateX(0)'
        }
    })
})
