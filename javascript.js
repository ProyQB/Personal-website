// Interactive form feedback simulation
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const feedback = document.getElementById("formFeedback");
            feedback.textContent = "Thank you! Your message has been sent successfully.";
            contactForm.reset();
            
            setTimeout(() => {
                feedback.textContent = "";
            }, 5000);
        });
    }
});
