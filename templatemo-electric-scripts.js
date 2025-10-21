// JavaScript Document

/*

TemplateMo 596 Electric Xtra - Adapted for AgriTech

*/

// Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
                
                // Randomly assign Teal (#2EC4B6) or Orange (#FF9F1C) color via CSS variable
                if (Math.random() > 0.5) {
                    // Set to Orange/Yellow (Harvest/Sun)
                    particle.style.setProperty('--particle-color', '#FF9F1C'); 
                } else {
                    // Set to Teal/Green (Growth/Tech)
                    particle.style.setProperty('--particle-color', '#2EC4B6'); 
                }
                
                particlesContainer.appendChild(particle);
            }
        }

// ... (rest of the script remains unchanged as functionality is preserved)
// Mobile menu toggle
// ...

// Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // AgriTech specific message
            alert('Your inquiry has been received by AgriTech! We\'ll connect you with our Centralised Data Platform team soon.');
            this.reset();
        });

// Initialize particles
        createParticles();

// Text rotation with character animation
// ... (rest of the script remains unchanged)