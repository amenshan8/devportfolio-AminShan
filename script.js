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