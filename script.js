// Traduction des contenus
const translations = {
    fr: {
        jobTitle: "Technico-commercial itinérant",
        division: "Division Industrie",
        subtitle: "Sarl STC CO",
        slogan: '"Your partner in control and measurement"',
        phone: "📞 Téléphone",
        fax: "📠 Fix",
        email: "✉️ Email",
        whatsapp: "💬 WhatsApp",
        website: "🌐 Site web",
        address: "📍 Adresse",
        brochure: "📘 Brochure",
        downloadPdf: "⬇️",
        downloadContact: "📥 Télécharger Contact",
        description: "STC Co fournit des solutions sur mesure en automatisation et instrumentation industrielle, en partenariat avec des leaders technologiques.",
        partners: "Nos partenaires",
        langIcon: "🌐"
    },
    en: {
        jobTitle: "Traveling Technical Sales Representative",
        division: "Industry Division",
        subtitle: "STC CO LLC",
        slogan: '"Your partner in control and measurement"',
        phone: "📞 Phone",
        fax: "📠 Fax",
        email: "✉️ Email",
        whatsapp: "💬 WhatsApp",
        website: "🌐 Website",
        address: "📍 Address",
        brochure: "📘 Brochure",
        downloadPdf: "⬇️",
        downloadContact: "📥 Download Contact",
        description: "STC Co provides custom solutions in industrial automation and instrumentation, in partnership with technology leaders.",
        partners: "Our Partners",
        langIcon: "🌐"
    }
};

let currentLang = 'fr';

// Fonction pour changer la brochure PDF
function updateBrochurePDF(lang) {
    const pdfDownloadBtn = document.querySelector('.pdf-download');
    if (pdfDownloadBtn) {
        if (lang === 'en') {
            pdfDownloadBtn.href = "./Brochure_EN.pdf";
        } else {
            pdfDownloadBtn.href = "./Brochure.pdf";
        }
    }
}

// Fonction pour appliquer la traduction
function applyTranslation(lang) {
    const t = translations[lang];
    
    // Mise à jour des textes
    document.querySelector('.job-title').textContent = t.jobTitle;
    document.querySelector('.division-title').textContent = t.division;
    document.querySelector('.subtitle').textContent = t.subtitle;
    document.querySelector('.subtitle1').textContent = t.slogan;
    document.querySelector('.description-text').textContent = t.description;
    document.querySelector('.partners-title').textContent = t.partners;
    
    // Mise à jour des boutons
    document.querySelector('.phone-btn').innerHTML = t.phone;
    document.querySelector('.fax-btn').innerHTML = t.fax;
    document.querySelector('.email-btn').innerHTML = t.email;
    document.querySelector('.whatsapp-btn').innerHTML = t.whatsapp;
    document.querySelector('.website-btn').innerHTML = t.website;
    document.querySelector('.address-btn').innerHTML = t.address;
    document.querySelector('.brochure-link').innerHTML = t.brochure;
    document.querySelector('.pdf-download').innerHTML = t.downloadPdf;
    document.querySelector('.contact-btn').innerHTML = t.downloadContact;
    
    // Changement du titre du bouton
    const langBtn = document.getElementById('language-toggle');
    if (langBtn) {
        langBtn.setAttribute('title', lang === 'fr' ? 'English' : 'Français');
    }
    
    // Changement de la langue du document
    document.documentElement.lang = lang === 'fr' ? 'fr' : 'en';
    
    // Ajout/suppression de la classe pour le CSS
    if (lang === 'en') {
        document.body.classList.add('english');
    } else {
        document.body.classList.remove('english');
    }
    
    // Mise à jour du PDF
    updateBrochurePDF(lang);
    
    // Sauvegarde de la préférence
    localStorage.setItem('preferredLanguage', lang);
}

// Changement de langue
function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    applyTranslation(currentLang);
}

// Gestion du mode sombre
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Vérifier la préférence sauvegardée
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = '🌙';
        if (themeToggle) themeToggle.setAttribute('title', 'Mode clair');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        themeIcon.textContent = '🌞';
        if (themeToggle) themeToggle.setAttribute('title', 'Mode sombre');
    }
    
    // Gestionnaire d'événement pour le bouton
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            
            if (isDarkMode) {
                themeIcon.textContent = '🌙';
                if (themeToggle) themeToggle.setAttribute('title', 'Mode clair');
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.textContent = '🌞';
                if (themeToggle) themeToggle.setAttribute('title', 'Mode sombre');
                localStorage.setItem('theme', 'light');
            }
        });
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Récupérer la langue sauvegardée
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
        currentLang = savedLang;
        applyTranslation(currentLang);
    } else {
        // Détecter la langue du navigateur
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('en')) {
            currentLang = 'en';
            applyTranslation(currentLang);
        } else {
            currentLang = 'fr';
            applyTranslation(currentLang);
        }
    }
    
    // Initialiser le bouton de traduction
    const langToggle = document.getElementById('language-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // Initialiser le thème
    initThemeToggle();
});