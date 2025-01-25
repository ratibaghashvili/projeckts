document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const body = document.body;
    const html = document.documentElement;
    
    // Prevent scrolling - multiple approaches for better mobile support
    function disableScroll() {
        // Add styles to both html and body
        html.style.overflow = 'hidden';
        html.style.height = '100%';
        body.style.overflow = 'hidden';
        body.style.height = '100%';
        body.style.position = 'fixed';
        body.style.width = '100%';
    }

    // Enable scrolling
    function enableScroll() {
        html.style.overflow = '';
        html.style.height = '';
        body.style.overflow = '';
        body.style.height = '';
        body.style.position = '';
        body.style.width = '';
    }

    // Initially disable scroll
    disableScroll();
    
    // Hide loading screen and enable scrolling after 2 seconds
    setTimeout(() => {
        loadingScreen.classList.add('hide');
        setTimeout(() => {
            enableScroll();
            loadingScreen.style.display = 'none';
        }, 500);
    }, 3000);
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    document.body.style.overflow = hamburger.classList.contains("active") ? "hidden" : "";
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.style.overflow = "";
    });
});