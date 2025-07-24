// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const skillBars = document.querySelectorAll('.skill-progress');
const promptInput = document.getElementById('promptInput');
const generateBtn = document.getElementById('generateBtn');
const promptOutput = document.getElementById('promptOutput');
const contactForm = document.getElementById('contactForm');
const exampleCards = document.querySelectorAll('.example-card');

// Navigation Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add click event to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Animate skill bars on scroll
const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !bar.classList.contains('animated')) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
            bar.classList.add('animated');
        }
    });
};

// Animate skills and languages progress bars
const animateSkillsLanguages = () => {
    const skillsSection = document.querySelector('.skills-languages-section');
    if (!skillsSection) return;

    const progressBars = skillsSection.querySelectorAll('.skill-progress');
    
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !bar.classList.contains('animated')) {
            const width = bar.getAttribute('data-width');
            bar.style.setProperty('--target-width', width + '%');
            bar.style.width = width + '%';
            bar.classList.add('animated');
        }
    });
};

// Scroll event listener
window.addEventListener('scroll', () => {
    animateSkillBars();
    animateSkillsLanguages();
    
    // Update active navigation link
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Language Translations
const translations = {
    en: {
        nav: {
            home: "Home",
            skills: "Skills & Languages",
            projects: "Projects",
            cv: "CV",
            contact: "Contact"
        },
        hero: {
            name: "Amin Shan",
            title: "Aspiring Software Developer",
            description: "I am an ambitious and detail-oriented aspiring software developer. I enjoy building websites, developing software, and solving technical problems. I have experience with cracking games and software for educational purposes, programming games, and creating websites using HTML, CSS, and JavaScript.\n\nI speak Arabic, Turkish, Dutch, and English.",
            viewProjects: "View Projects",
            contactMe: "Contact Me",
            scrollDown: "Scroll to explore",
            skillsTitle: "Skills Overview"
        },
        skills: {
            title: "Skills & Languages",
            technicalTitle: "Technical Skills",
            languagesTitle: "Languages",
            arabic: "Arabic",
            turkish: "Turkish",
            dutch: "Dutch",
            english: "English"
        },
        projects: {
            title: "My Projects",
            liveDemo: "Live Demo",
            githubRepo: "GitHub Repo",
            workout: {
                title: "Workout Planner App",
                description: "My favorite project so far! A workout planner where you can add exercises, link videos, and export your plan to PDF. One day, I hope to turn this into a full mobile app to help people get healthier."
            },
            barber: {
                title: "Barber Shop Website",
                description: "A simple but heartfelt project where I tried to create a barbershop website for everyone, translated into all the languages I know."
            },
            tetris: {
                title: "Neon Tetris Game",
                description: "A modern version of Tetris with a neon look. Fun, simple, and playable directly in the browser."
            },
            pvz: {
                title: "Plants vs Zombies Fan Game",
                description: "My fan version of Plants vs Zombies, made from scratch for fun and practice."
            },
            ecommerce: {
                title: "Sleek E-Commerce (AI Assisted)",
                description: "My first webshop project, with AI assistance for product descriptions. The API is currently stopped but the design is live."
            },
            sdcv: {
                title: "Software Developer CV",
                description: "A sleek, modern CV/resume website showcasing my skills and experience as a software developer. Built with clean HTML, CSS, and JavaScript, featuring smooth animations and a professional design that stands out."
            },
            ebusiness: {
                title: "E-Business Card Generator",
                description: "Crafted to make anyone stand out professionally. This digital business card is fully customizable based on the user's job, industry, and personal style. Whether you're a barber, developer, or CEO — I can tailor it to your vibe. Sharp design, clean layout, and ready to impress."
            }
        },
        cv: {
            title: "View My CV",
            terminalMessage: "Ready to explore my professional journey? Check out my interactive CV below ↓",
            viewFull: "View Full CV",
            download: "Download"
        },
        contact: {
            title: "Let's Connect",
            readyToCollaborate: "Ready to collaborate?",
            description: "I'm currently looking for opportunities in software development. Whether you have a project in mind or just want to connect, I'd love to hear from you!",
            location: "Apeldoorn, Netherlands",
            connectTitle: "Let's Connect",
            nameLabel: "Your Name",
            emailLabel: "Email Address",
            selectPlaceholder: "Select Project Type",
            webDev: "Web Development",
            gameDev: "Game Development",
            collaboration: "Collaboration",
            opportunity: "Job Opportunity",
            messageLabel: "Your Message",
            sendMessage: "Send Message"
        },
        footer: {
            copyright: "© 2024 Amin Shan. Aspiring Software Developer. Building the future, one line at a time."
        }
    },
    ar: {
        nav: {
            home: "الرئيسية",
            skills: "المهارات واللغات",
            projects: "المشاريع",
            cv: "السيرة الذاتية",
            contact: "اتصل بي"
        },
        hero: {
            name: "أمين شان",
            title: "مطور برمجيات طموح",
            description: "أنا مطور برمجيات طموح وأولي اهتمامًا دقيقًا للتفاصيل. أنا أستمتع ببناء المواقع، وتطوير البرمجيات، وحل المشكلات التقنية. لدي خبرة في اختراق الألعاب والبرمجيات لأغراض تعليمية، وبرمجة الألعاب، وإنشاء المواقع باستخدام HTML، CSS، وJavaScript.\n\nأنا أتحدث العربية، التركية، الهولندية، والإنجليزية.",
            viewProjects: "عرض المشاريع",
            contactMe: "اتصل بي",
            scrollDown: "انتقل للأسفل للاستكشاف",
            skillsTitle: "نظرة عامة على المهارات"
        },
        skills: {
            title: "المهارات واللغات",
            technicalTitle: "المهارات التقنية",
            languagesTitle: "اللغات",
            arabic: "العربية",
            turkish: "التركية",
            dutch: "الهولندية",
            english: "الإنجليزية"
        },
        projects: {
            title: "مشاريعي",
            liveDemo: "عرض مباشر",
            githubRepo: "مستودع GitHub",
            workout: {
                title: "تطبيق مخطط التمارين",
                description: "مشروعي المفضل حتى الآن! مخطط تمارين يمكنك من خلاله إضافة التمارين، ربط مقاطع الفيديو، وتصدير خطتك إلى PDF. يومًا ما، أتطلع إلى تحويله إلى تطبيق جوال كامل لمساعدة الناس على أن يكونوا أكثر صحة."
            },
            barber: {
                title: "موقع صالون حلاقة",
                description: "مشروع بسيط ولكنه من القلب حيث حاولت إنشاء موقع لصالون حلاقة للجميع، مترجم إلى جميع اللغات التي أعرفها."
            },
            tetris: {
                title: "لعبة تتريس النيون",
                description: "نسخة حديثة من تتريس مع مظهر النيون. ممتعة، بسيطة، وقابلة للعب مباشرة في المتصفح."
            },
            pvz: {
                title: "لعبة Plants vs Zombies لمطورة",
                description: "نسختي المميزة من Plants vs Zombies، تم إنشاؤها من الصفر للمتعة والممارسة."
            },
            ecommerce: {
                title: "التجارة الإلكترونية الأنيقة (الذكاء الاصطناعي المساعد)",
                description: "مشروع متجري الأول، مع مساعدة الذكاء الاصطناعي لوصف المنتجات. واجهة برمجة التطبيقات (API) متوقفة حاليًا لكن التصميم متاح."
            },
            sdcv: {
                title: "سيرة المطور",
                description: "موقع سيرة ذاتية عصري وأنيق يعرض مهاراتي وخبرتي كمطور برمجيات. مبني على HTML، CSS، وJavaScript نظيفة، مع رسوم متحركة سلسة وتصميم احترافي يتميز."
            },
            ebusiness: {
                title: "مولد بطاقة الأعمال الإلكترونية",
                description: "تم إنشاؤها لجعل أي شخص يبرز بشكل احترافي. هذه البطاقة التجارية الرقمية قابلة للتخصيص بالكامل بناءً على وظيفة المستخدم، صناعته، ونمطه الشخصي."
            }
        },
        cv: {
            title: "عرض سيرتي الذاتية",
            terminalMessage: "جاهز لاستكشاف رحلتي المهنية؟ تحقق من سيرتي الذاتية التفاعلية أدناه ↓",
            viewFull: "عرض السيرة الذاتية",
            download: "تحميل"
        },
        contact: {
            title: "لنتحدث",
            readyToCollaborate: "مستعد للتعاون؟",
            description: "أنا حاليًا أبحث عن فرص في تطوير البرمجيات. سواء كان لديك مشروع في بالك أو فقط تريد التواصل، أود أن أسمع منك!",
            location: "أبيلدورن، هولندا",
            connectTitle: "لنتحدث",
            nameLabel: "اسمك",
            emailLabel: "عنوان البريد الإلكتروني",
            selectPlaceholder: "اختر نوع المشروع",
            webDev: "تطوير الويب",
            gameDev: "تطوير الألعاب",
            collaboration: "التعاون",
            opportunity: "فرصة عمل",
            messageLabel: "رسالتك",
            sendMessage: "إرسال الرسالة"
        },
        footer: {
            copyright: "© 2024 أمين شان. مطور برمجيات طموح. نبني المستقبل، سطراً بعد سطر."
        }
    },
    nl: {
        nav: {
            home: "Home",
            skills: "Vaardigheden & Talen",
            projects: "Projecten",
            cv: "CV",
            contact: "Contact"
        },
        hero: {
            name: "Amin Shan",
            title: "Aspirant Software Developer",
            description: "Ik ben een ambitieuze en detailgerichte aspirant software-ontwikkelaar. Ik vind het leuk om websites te bouwen, software te ontwikkelen en technische problemen op te lossen. Ik heb ervaring met het kraken van games en software voor educatieve doeleinden, het programmeren van games en het maken van websites met HTML, CSS en JavaScript.\n\nIk spreek Arabisch, Turks, Nederlands en Engels.",
            viewProjects: "Bekijk Projecten",
            contactMe: "Neem Contact Op",
            scrollDown: "Scroll om te verkennen",
            skillsTitle: "Vaardigheden Overzicht"
        },
        skills: {
            title: "Vaardigheden & Talen",
            technicalTitle: "Technische Vaardigheden",
            languagesTitle: "Talen",
            arabic: "Arabisch",
            turkish: "Turks",
            dutch: "Nederlands",
            english: "Engels"
        },
        projects: {
            title: "Mijn Projecten",
            liveDemo: "Live Demo",
            githubRepo: "GitHub Repository",
            workout: {
                title: "Workout Planner App",
                description: "Mijn favoriete project tot nu toe! Een workout planner waarmee je oefeningen kunt toevoegen, video's kunt koppelen en je plan kunt exporteren naar PDF. Op een dag hoop ik dit om te toveren tot een volledige mobiele app om mensen gezonder te maken."
            },
            barber: {
                title: "Kapperszaak Website",
                description: "Een eenvoudig maar oprecht project waar ik geprobeerd heb een kapperszaak website voor iedereen te maken, vertaald in alle talen die ik ken."
            },
            tetris: {
                title: "Neon Tetris Game",
                description: "Een moderne versie van Tetris met een neon look. Leuk, eenvoudig en speelbaar direct in de browser."
            },
            pvz: {
                title: "Plants vs Zombies Fan Game",
                description: "Mijn fan versie van Plants vs Zombies, gemaakt vanaf nul voor plezier en oefening."
            },
            ecommerce: {
                title: "Sleek E-Commerce (AI Assisted)",
                description: "Mijn eerste webshop project, met AI-hulp voor productbeschrijvingen. De API is momenteel gestopt maar het design is beschikbaar."
            },
            sdcv: {
                title: "Software Developer CV",
                description: "Een strak, moderne CV/website die mijn vaardigheden en ervaring als software-ontwikkelaar laat zien. Gebouwd met schone HTML, CSS en JavaScript, met vloeiende animaties en een professioneel design dat opvalt."
            },
            ebusiness: {
                title: "E-Business Card Generator",
                description: "Gemaakt om iedereen professioneel te laten opvallen. Deze digitale visitekaart is volledig aanpasbaar op basis van baan, industrie en persoonlijke stijl."
            }
        },
        cv: {
            title: "Bekijk Mijn CV",
            terminalMessage: "Klaar om mijn professionele reis te verkennen? Bekijk mijn interactieve CV hieronder ↓",
            viewFull: "Bekijk Volledig CV",
            download: "Downloaden"
        },
        contact: {
            title: "Laten We Contact Maken",
            readyToCollaborate: "Klaar om samen te werken?",
            description: "Ik ben momenteel op zoek naar kansen in software-ontwikkeling. Of je nu een project in gedachten hebt of gewoon contact wilt opnemen, ik zou graag van je horen!",
            location: "Apeldoorn, Nederland",
            connectTitle: "Laten We Contact Maken",
            nameLabel: "Uw Naam",
            emailLabel: "E-mailadres",
            selectPlaceholder: "Selecteer Projecttype",
            webDev: "Webontwikkeling",
            gameDev: "Game Ontwikkeling",
            collaboration: "Samenwerking",
            opportunity: "Werkmogelijkheid",
            messageLabel: "Uw Bericht",
            sendMessage: "Verstuur Bericht"
        },
        footer: {
            copyright: "© 2024 Amin Shan. Aspirant Software Developer. De toekomst bouwen, regel voor regel."
        }
    }
};

// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('preferredLanguage') || 'en';
        this.init();
    }

    init() {
        this.applyLanguage();
        this.setupEventListeners();
        this.updateLanguageButton();
    }

    applyLanguage() {
        document.documentElement.lang = this.currentLang;
        document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        
        if (this.currentLang === 'ar') {
            document.body.classList.add('arabic-font');
        } else {
            document.body.classList.remove('arabic-font');
        }

        this.translateContent();
        this.updateSkillsCode();
    }

    translateContent() {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            const value = this.getNestedValue(translations[this.currentLang], key);
            
            if (value) {
                // Handle textarea content
                if (element.tagName === 'TEXTAREA') {
                    element.setAttribute('data-placeholder-translation', value);
                } else if (element.tagName === 'SELECT' && element.querySelector('option[value=""]')) {
                    // Handle select placeholder
                    element.querySelector('option[value=""]').textContent = value;
                } else {
                    element.textContent = value;
                }
            }
        });
    }

    getNestedValue(obj, key) {
        return key.split('.').reduce((current, key) => current[key], obj);
    }

    updateLanguageButton() {
        const langText = document.querySelector('.lang-text');
        const langCode = this.currentLang.toUpperCase();
        langText.textContent = langCode;
    }

    async changeLanguage(lang) {
        if (lang === this.currentLang) return;
        
        this.currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        
        // Smooth transition
        document.body.style.opacity = '0.8';
        
        setTimeout(() => {
            this.applyLanguage();
            document.body.style.opacity = '1';
        }, 150);
    }

    setupEventListeners() {
        document.querySelectorAll('.language-option').forEach(button => {
            button.addEventListener('click', (e) => {
                const lang = e.target.closest('.language-option').dataset.lang;
                this.changeLanguage(lang);
            });
        });
    }

    updateSkillsCode() {
        const skillsCode = document.querySelector('.skills-code');
        if (skillsCode) {
            const skills = translations[this.currentLang].skillsText || {
                languages: this.currentLang === 'ar' ? ["HTML", "CSS", "JavaScript", "Python (أساسي)", "SQL"] : 
                         this.currentLang === 'nl' ? ["HTML", "CSS", "JavaScript", "Python (basis)", "SQL"] :
                         ["HTML", "CSS", "JavaScript", "Python (basic)", "SQL"],
                frameworks: this.currentLang === 'ar' ? ["React (تعلم)", "Tailwind CSS", "Node.js (أساسيات)"] :
                           this.currentLang === 'nl' ? ["React (leren)", "Tailwind CSS", "Node.js (basics)"] :
                           ["React (learning)", "Tailwind CSS", "Node.js (basics)"],
                tools: ["Git", "GitHub", "Visual Studio Code", "Figma"],
                specialties: translations[this.currentLang].specialties || [
                    "API Integration",
                    "Responsive Design", 
                    "Browser Game Development",
                    "AI-assisted Web Development",
                    this.currentLang === 'ar' ? "مواقع متعددة اللغات (العربية، الهولندية، التركية، الإنجليزية)" :
                    this.currentLang === 'nl' ? "Meertalige websites (Arabisch, Nederlands, Turks, Engels)" :
                    "Multilingual Websites (Arabic, Dutch, Turkish, English)",
                    this.currentLang === 'ar' ? "واجهة متاجر إلكترونية" :
                    this.currentLang === 'nl' ? "E-commerce Frontend" :
                    "E-commerce Frontend",
                    "Workout Planner with PDF Export"
                ],
                goals: this.currentLang === 'ar' ? "أصبح مطور برمجيات محترف يخلق أدوات لمساعدة الناس في الصحة، اللياقة، والخدمات الرقمية." :
                     this.currentLang === 'nl' ? "Word een professionele Software Developer die tools creëert om mensen te helpen met gezondheid, fitness en digitale diensten." :
                     "Become a professional Software Developer who creates tools to help people in health, fitness, and digital services."
            };
            
            let skillsText = `<span class="keyword">const</span> <span class="variable">skillsOverview</span> = {\n`;
            
            // Languages
            skillsText += `  <span class="property">languages</span>: [`;
            skillsText += skills.languages.map(s => `<span class="string">"${s}"</span>`).join(', ');
            skillsText += `],\n`;
            
            // Frameworks
            skillsText += `  <span class="property">frameworks</span>: [`;
            skillsText += skills.frameworks.map(s => `<span class="string">"${s}"</span>`).join(', ');
            skillsText += `],\n`;
            
            // Tools
            skillsText += `  <span class="property">tools</span>: [`;
            skillsText += skills.tools.map(s => `<span class="string">"${s}"</span>`).join(', ');
            skillsText += `],\n`;
            
            // Specialties (first 4)
            skillsText += `  <span class="property">specialties</span>: [\n`;
            skillsText += skills.specialties.slice(0, 4).map(s => `    <span class="string">"${s}"</span>`).join(',\n');
            skillsText += `\n  ],\n`;
            
            // Goals
            skillsText += `  <span class="property">goals</span>: <span class="string">"${skills.goals}"</span>\n}`;
            
            skillsCode.innerHTML = skillsText;
        }
    }
}

// Initialize Language Manager
let langManager;

// Translations for skills text
translations.en.skillsText = {
    languages: ["HTML", "CSS", "JavaScript", "Python (basic)", "SQL"],
    frameworks: ["React (learning)", "Tailwind CSS", "Node.js (basics)"],
    tools: ["Git", "GitHub", "Visual Studio Code", "Figma"],
    specialties: [
        "API Integration",
        "Responsive Design", 
        "Browser Game Development",
        "AI-assisted Web Development",
        "Multilingual Websites (Arabic, Dutch, Turkish, English)",
        "E-commerce Frontend",
        "Workout Planner with PDF Export"
    ],
    goals: "Become a professional Software Developer who creates tools to help people in health, fitness, and digital services."
};

translations.ar.skillsText = {
    languages: ["HTML", "CSS", "JavaScript", "Python (أساسي)", "SQL"],
    frameworks: ["React (تعلم)", "Tailwind CSS", "Node.js (أساسيات)"],
    tools: ["Git", "GitHub", "Visual Studio Code", "Figma"],
    specialties: [
        "API Integration",
        "تصميم متجاوب", 
        "تطوير ألعاب المتصفح",
        "تطوير الويب بالذكاء الاصطناعي",
        "مواقع متعددة اللغات",
        "واجهة متاجر إلكترونية",
        "مخطط التمارين مع تصدير PDF"
    ],
    goals: "أصبح مطور برمجيات محترف يخلق أدوات لمساعدة الناس في الصحة، اللياقة، والخدمات الرقمية."
};

translations.nl.skillsText = {
    languages: ["HTML", "CSS", "JavaScript", "Python (basis)", "SQL"],
    frameworks: ["React (leren)", "Tailwind CSS", "Node.js (basics)"],
    tools: ["Git", "GitHub", "Visual Studio Code", "Figma"],
    specialties: [
        "API Integratie",
        "Responsive Design", 
        "Browser Game Ontwikkeling",
        "AI-ondersteunde Webontwikkeling",
        "Meertalige websites",
        "E-commerce Frontend",
        "Workout Planner met PDF Export"
    ],
    goals: "Word een professionele Software Developer die tools creëert om mensen te helpen met gezondheid, fitness en digitale diensten."
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    langManager = new LanguageManager();
    
    // Add smooth transition style
    const style = document.createElement('style');
    style.textContent = `
        body {
            transition: opacity 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});

// Add the new skills overview object
const skillsOverview = {
  languages: ["HTML", "CSS", "JavaScript", "Python (basic)", "SQL"],
  frameworks: ["React (learning)", "Tailwind CSS", "Node.js (basics)"],
  tools: ["Git", "GitHub", "Visual Studio Code", "Figma"],
  specialties: [
    "API Integration",
    "Responsive Design", 
    "Browser Game Development",
    "AI-assisted Web Development",
    "Multilingual Websites (Arabic, Dutch, Turkish, English)",
    "E-commerce Frontend",
    "Workout Planner with PDF Export"
  ],
  softSkills: ["Problem-Solving", "Patience", "Leadership", "Attention to Detail", "Creativity"],
  goals: "Become a professional Software Developer who creates tools to help people in health, fitness, and digital services."
};

// Add these new functions for the CV section

// Typing effect for CV section
function typeWriter(text, i = 0) {
    const element = document.getElementById('typing-text');
    if (!element) return;
    
    if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text, i), 50); // Adjust typing speed here
    } else {
        // Reset after completion for demo effect
        setTimeout(() => {
            element.textContent = '';
            typeWriter('cat DeveloperCV.pdf --preview', 0);
        }, 5000);
    }
}

// Observe and animate CV section
function animateCVSection() {
    const cvSection = document.getElementById('cv');
    if (!cvSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter('cat DeveloperCV.pdf --preview', 0);
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(cvSection);
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    animateCVSection();
    
    // Add smooth scroll to CV section
    const cvLink = document.querySelector('a[href="#cv"]');
    if (cvLink) {
        cvLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('cv').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});

// AI Prompt Generation Demo
generateBtn.addEventListener('click', async () => {
    const prompt = promptInput.value.trim();
    
    if (!prompt) {
        promptOutput.textContent = 'Please enter a prompt to generate a response.';
        return;
    }
    
    generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
    generateBtn.disabled = true;
    
    try {
        // Simulate AI response generation
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const responses = {
            'ui': `Here's an optimized prompt for UI design:

"Create a modern, dark-themed dashboard interface with the following specifications:
- Use glassmorphism design principles with subtle transparency
- Implement a sidebar navigation with clean icons
- Include data visualization cards with charts
- Ensure responsive design for mobile and desktop
- Use a color palette of deep blues and purples with accent colors
- Add subtle animations and hover effects
- Follow accessibility guidelines with proper contrast ratios"

This prompt structure ensures specific, actionable results from AI design tools.`,
            
            'code': `Effective code generation prompt:

"Generate a React functional component with TypeScript that:
- Accepts props for title, data array, and onSelect callback
- Implements a searchable dropdown with filtering
- Uses styled-components for styling
- Includes proper TypeScript interfaces
- Handles edge cases (empty data, loading states)
- Follows React best practices and hooks
- Includes JSDoc comments for documentation
- Exports the component as default"

This approach yields production-ready, well-structured code.`,
            
            'content': `Content creation prompt example:

"Write compelling landing page copy for a SaaS productivity tool:
- Target audience: Remote teams and project managers
- Tone: Professional yet approachable, emphasizing efficiency
- Include: Powerful headline, 3 key benefits, social proof section
- Focus on pain points: Communication gaps, deadline management
- Call-to-action: Free trial signup
- Word count: 300-500 words
- Include emotional triggers and urgency
- Optimize for conversion and readability"

This structure ensures focused, conversion-optimized content.`
        };
        
        let response = responses.ui; // Default response
        
        if (prompt.toLowerCase().includes('code') || prompt.toLowerCase().includes('component')) {
            response = responses.code;
        } else if (prompt.toLowerCase().includes('content') || prompt.toLowerCase().includes('copy')) {
            response = responses.content;
        } else if (prompt.toLowerCase().includes('ui') || prompt.toLowerCase().includes('design')) {
            response = responses.ui;
        } else {
            response = `Based on your prompt: "${prompt}"

Here's a structured approach to prompt engineering:

1. **Context Setting**: Clearly define the role and expertise level
2. **Specific Requirements**: List exact specifications and constraints
3. **Output Format**: Specify the desired format and structure
4. **Examples**: Provide examples of desired outcomes
5. **Quality Criteria**: Define success metrics and standards

Example optimized prompt:
"As an expert [ROLE], create [SPECIFIC OUTPUT] that [REQUIREMENTS]. 
The output should [FORMAT SPECIFICATIONS] and include [SPECIFIC ELEMENTS].
Ensure [QUALITY CRITERIA] and follow [BEST PRACTICES]."

This structure maximizes AI output quality and relevance.`;
        }
        
        promptOutput.textContent = response;
        
    } catch (error) {
        promptOutput.textContent = 'Error generating response. Please try again.';
    } finally {
        generateBtn.innerHTML = '<i class="fas fa-magic"></i> Generate Response';
        generateBtn.disabled = false;
    }
});

// Example card interactions
exampleCards.forEach(card => {
    card.addEventListener('click', () => {
        const promptType = card.getAttribute('data-prompt');
        const examples = {
            'UI Design': 'Create a modern, accessible dashboard interface with dark theme and glassmorphism effects',
            'Code Generation': 'Generate a React component with TypeScript for a searchable data table with pagination',
            'Content Creation': 'Write compelling landing page copy for a SaaS productivity tool targeting remote teams'
        };
        
        promptInput.value = examples[promptType] || '';
        promptInput.focus();
        
        // Scroll to input
        promptInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});

// EmailJS Configuration - Updated
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'user_5K8q7X9L8m2N3j4H', // Replace with your actual public key
    SERVICE_ID: 'service_xyz123', // Replace with your service ID
    TEMPLATE_ID: 'template_contact123' // Replace with your template ID
};

// Initialize EmailJS (only if EmailJS is available)
if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
}

// Add status message container to contact form
const statusDiv = document.createElement('div');
statusDiv.className = 'form-status';
statusDiv.id = 'formStatus';
contactForm.appendChild(statusDiv);

// Contact Form Handler
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    const submitBtn = contactForm.querySelector('.submit-btn');
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    try {
        if (typeof emailjs === 'undefined') {
            throw new Error('EmailJS not loaded. Please check your configuration.');
        }
        
        // Send email using EmailJS
        const response = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            {
                from_name: data.name,
                from_email: data.email,
                project_type: data.projectType,
                message: data.message,
                to_email: 'amenshan8@gmail.com'
            }
        );
        
        // Success
        showStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        
    } catch (error) {
        // Error
        console.error('Email error:', error);
        showStatus('Oops! Something went wrong. Please try again or email me directly at amenshan8@gmail.com', 'error');
    } finally {
        // Reset button
        submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
        submitBtn.disabled = false;
        
        // Hide status after 5 seconds
        setTimeout(() => {
            const statusMessage = document.querySelector('.form-status');
            if (statusMessage) {
                statusMessage.style.display = 'none';
            }
        }, 5000);
    }
});

function showStatus(message, type) {
    const statusEl = document.getElementById('formStatus');
    statusEl.textContent = message;
    statusEl.className = `form-status ${type}`;
    statusEl.style.display = 'block';
    
    // Auto-scroll to status message
    statusEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Fallback form submission (if EmailJS fails or isn't configured)
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Check if EmailJS is properly configured
    if (!EMAILJS_CONFIG.PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY === 'user_5K8q7X9L8m2N3j4H') {
        // Use FormSubmit as fallback
        const form = e.target;
        const formData = new FormData(form);
        
        // Create hidden inputs for FormSubmit
        const nextInput = document.createElement('input');
        nextInput.type = 'hidden';
        nextInput.name = '_next';
        nextInput.value = window.location.href + '?success=true';
        
        const subjectInput = document.createElement('input');
        subjectInput.type = 'hidden';
        subjectInput.name = '_subject';
        subjectInput.value = 'New Portfolio Message from ' + formData.get('name');
        
        const captchaInput = document.createElement('input');
        captchaInput.type = 'hidden';
        captchaInput.name = '_captcha';
        captchaInput.value = 'false';
        
        form.appendChild(nextInput);
        form.appendChild(subjectInput);
        form.appendChild(captchaInput);
        
        // Submit to FormSubmit
        form.action = 'https://formsubmit.co/amenshan8@gmail.com';
        form.method = 'POST';
        form.submit();
    }
});

// Add this CSS for status messages
const style = document.createElement('style');
style.textContent = `
    .form-status {
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
        font-weight: 500;
        display: none;
    }
    .form-status.success {
        background: rgba(16, 185, 129, 0.1);
        border: 1px solid rgba(16, 185, 129, 0.3);
        color: #10b981;
    }
    .form-status.error {
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid rgba(239, 68, 68, 0.3);
        color: #ef4444;
    }
    .form-status.loading {
        background: rgba(99, 102, 241, 0.1);
        border: 1px solid rgba(99, 102, 241, 0.3);
        color: #6366f1;
    }
`;
document.head.appendChild(style);

// Optional: Add form field animations
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value) {
            this.classList.add('has-value');
        } else {
            this.classList.remove('has-value');
        }
    });
});

// Enhanced project card interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add staggered animation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add ripple effect on project buttons
document.querySelectorAll('.project-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-card');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Dynamic typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add interactive hover effects
document.querySelectorAll('.project-card, .skill-category, .example-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Update the floating card content dynamically
document.addEventListener('DOMContentLoaded', () => {
    const skillsOverview = {
        languages: ["HTML", "CSS", "JavaScript", "Python (basic)", "SQL"],
        frameworks: ["React (learning)", "Tailwind CSS", "Node.js (basics)"],
        tools: ["Git", "GitHub", "Visual Studio Code", "Figma"],
        specialties: [
            "API Integration",
            "Responsive Design",
            "Browser Game Development",
            "AI-assisted Web Development",
            "Multilingual Websites (Arabic, Dutch, Turkish, English)",
            "E-commerce Frontend",
            "Workout Planner with PDF Export"
        ],
        softSkills: ["Problem-Solving", "Patience", "Leadership", "Attention to Detail", "Creativity"],
        goals: "Become a professional Software Developer who creates tools to help people in health, fitness, and digital services."
    };

    const codePreview = document.querySelector('.code-preview code');
    if (codePreview) {
        const codeString = `<span class="keyword">const</span> <span class="variable">skillsOverview</span> = {
    <span class="property">languages</span>: [${skillsOverview.languages.map(s => `<span class="string">"${s}"</span>`).join(', ')}],
    <span class="property">frameworks</span>: [${skillsOverview.frameworks.map(s => `<span class="string">"${s}"</span>`).join(', ')}],
    <span class="property">tools</span>: [${skillsOverview.tools.map(s => `<span class="string">"${s}"</span>`).join(', ')}],
    <span class="property">specialties</span>: [
${skillsOverview.specialties.slice(0, 4).map(s => `        <span class="string">"${s}"</span>`).join(',\n')}
    ],
    <span class="property">goals</span>: <span class="string">"${skillsOverview.goals}"</span>
};</span>`;
        
        codePreview.innerHTML = codeString;
    }
});
