// Contoh: Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log("Website AffiliatePro siap digunakan!");

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Form Submission Handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.');
    contactForm.reset();
});

// Auto-close menu when link is clicked (Mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

function generateLink() {
    const rawLink = document.getElementById('raw-link').value;
    const resultContainer = document.getElementById('result-container');
    const generatedUrl = document.getElementById('generated-url');

    if (rawLink.trim() === "") {
        alert("Mohon masukkan link produk terlebih dahulu!");
        return;
    }

    // Simulasi logika generator (bisa diganti dengan API nyata nantinya)
    const affiliateId = "USER123";
    const newUrl = `https://affpro.id/go?url=${encodeURIComponent(rawLink)}&ref=${affiliateId}`;

    generatedUrl.value = newUrl;
    resultContainer.style.display = "block";
}

function copyLink() {
    const copyText = document.getElementById('generated-url');
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Untuk mobile

    navigator.clipboard.writeText(copyText.value);
    
    alert("Link berhasil disalin ke clipboard!");
}