// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Project Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (filterValue === 'all' || cardCategory === filterValue) {
                // Karta ko'rsatilishi kerak
                card.classList.remove('hidden');
            } else {
                // Karta yashirilishi kerak
                card.classList.add('hidden');
            }
        });
    });
});

// Form Validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

// Validation rules
const validationRules = {
    name: {
        element: nameInput,
        errorElement: document.getElementById('nameError'),
        validate: (value) => {
            if (value.trim() === '') {
                return { valid: false, message: 'Ism-sharif majburiy' };
            }
            if (value.trim().length < 3) {
                return { valid: false, message: 'Ism-sharif kamida 3 ta belgi bo\'lishi kerak' };
            }
            return { valid: true };
        }
    },
    email: {
        element: emailInput,
        errorElement: document.getElementById('emailError'),
        validate: (value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value.trim() === '') {
                return { valid: false, message: 'Email majburiy' };
            }
            if (!emailRegex.test(value)) {
                return { valid: false, message: 'Email noto\'g\'ri formatda' };
            }
            return { valid: true };
        }
    },
    subject: {
        element: subjectInput,
        errorElement: document.getElementById('subjectError'),
        validate: (value) => {
            if (value.trim() === '') {
                return { valid: false, message: 'Mavzu majburiy' };
            }
            if (value.trim().length < 3) {
                return { valid: false, message: 'Mavzu kamida 3 ta belgi bo\'lishi kerak' };
            }
            return { valid: true };
        }
    },
    message: {
        element: messageInput,
        errorElement: document.getElementById('messageError'),
        validate: (value) => {
            if (value.trim() === '') {
                return { valid: false, message: 'Xabar majburiy' };
            }
            if (value.trim().length < 10) {
                return { valid: false, message: 'Xabar kamida 10 ta belgi bo\'lishi kerak' };
            }
            return { valid: true };
        }
    }
};

// Real-time validation on input
Object.keys(validationRules).forEach(key => {
    const rule = validationRules[key];
    rule.element.addEventListener('blur', () => {
        validateField(key);
    });
    rule.element.addEventListener('input', () => {
        if (rule.element.classList.contains('error')) {
            validateField(key);
        }
    });
});

function validateField(fieldName) {
    const rule = validationRules[fieldName];
    const result = rule.validate(rule.element.value);

    if (result.valid) {
        rule.element.classList.remove('error');
        rule.errorElement.textContent = '';
    } else {
        rule.element.classList.add('error');
        rule.errorElement.textContent = result.message;
    }

    return result.valid;
}

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all fields
    let isFormValid = true;
    Object.keys(validationRules).forEach(key => {
        if (!validateField(key)) {
            isFormValid = false;
        }
    });

    if (isFormValid) {
        // Form is valid, prepare data
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            subject: subjectInput.value,
            message: messageInput.value
        };

        // Log form data (In a real application, you would send this to a backend)
        console.log('Form Data:', formData);

        // Show success message
        showSuccessMessage();

        // Reset form
        contactForm.reset();
        
        // Remove error classes
        Object.keys(validationRules).forEach(key => {
            validationRules[key].element.classList.remove('error');
            validationRules[key].errorElement.textContent = '';
        });
    } else {
        showErrorMessage();
    }
});

function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #00b894;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease-in-out;
    `;
    successDiv.textContent = '✓ Xabar muvaffaqiyatli yuborildi!';
    document.body.appendChild(successDiv);

    setTimeout(() => {
        successDiv.style.animation = 'slideOut 0.3s ease-in-out';
        setTimeout(() => successDiv.remove(), 300);
    }, 3000);
}

function showErrorMessage() {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #d63031;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease-in-out;
    `;
    errorDiv.textContent = '✕ Iltimaas, barcha maydonlarni to\'ldiring';
    document.body.appendChild(errorDiv);

    setTimeout(() => {
        errorDiv.style.animation = 'slideOut 0.3s ease-in-out';
        setTimeout(() => errorDiv.remove(), 300);
    }, 3000);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-in-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all section titles and cards
document.querySelectorAll('.section-title, .skill-card, .project-card, .experience-item').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Dark Mode / Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
// Agar localStorage-da mavjud bo'lsa uni ishlatish, aks holda default tun rejimi
let isDarkMode = localStorage.getItem('darkMode') !== 'false'; // Default: true (tun rejimi)

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    applyTheme();
}

function applyTheme() {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggle.title = 'Kun rejimiga o\'tish';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.title = 'Tun rejimiga o\'tish';
    }
}

// Theme toggle button event listener
themeToggle.addEventListener('click', toggleDarkMode);

// Page yuklanganida rejimni qo'llash
applyTheme();

// Initialize
console.log('Portfolio website loaded successfully!');
