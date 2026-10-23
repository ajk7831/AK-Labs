// ========================================
// AK LABS PRIVATE LIMITED
// Website JavaScript
// ========================================

// Set the current year automatically
document.getElementById("year").textContent =
    new Date().getFullYear();


// ========================================
// MOBILE NAVIGATION
// ========================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    });
});


// ========================================
// PRICING BUTTONS
// Select the service in the contact form
// ========================================

const serviceButtons = document.querySelectorAll(".service-button");
const serviceSelect = document.getElementById("service");

serviceButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedService = button.dataset.service;

        serviceSelect.value = selectedService;
    });
});

// ==========================================
// AK LABS PRIVATE LIMITED
// Contact Form - Direct Gmail Integration
// ==========================================

const CONTACT_EMAIL = "aklabs52014@gmail.com";

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    // ------------------------------------------
    // CONTACT FORM
    // ------------------------------------------

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get customer information
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const service = document.getElementById("service").value;
            const budget = document.getElementById("budget").value;
            const message = document.getElementById("message").value.trim();

            // Validate required fields
            if (!name || !email || !service || !message) {
                formStatus.textContent =
                    "Please complete all required fields.";
                return;
            }

            // Prepare email subject
            const subject = encodeURIComponent(
                "AK Labs Website Inquiry - " + service
            );

            // Prepare email body
            const body = encodeURIComponent(
                "Hello AK Labs Team,\n\n" +
                "I am interested in your website development services.\n\n" +
                "CUSTOMER DETAILS\n" +
                "-------------------------\n" +
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Requested Service: " + service + "\n" +
                "Budget: " + (budget || "Not specified") + "\n\n" +
                "PROJECT DETAILS\n" +
                "-------------------------\n" +
                message + "\n\n" +
                "Sent through the AK Labs Private Limited website."
            );

            // Direct Gmail compose URL
            const gmailURL =
                "https://mail.google.com/mail/?view=cm&fs=1" +
                "&to=" + encodeURIComponent(CONTACT_EMAIL) +
                "&su=" + subject +
                "&body=" + body;

            // Update status
            formStatus.textContent =
                "Opening Gmail to prepare your inquiry...";

            // Open Gmail in a new browser tab
            const gmailWindow = window.open(
                gmailURL,
                "_blank",
                "noopener"
            );

            // Inform the visitor
            if (!gmailWindow) {
                formStatus.textContent =
                    "Gmail may have been blocked. Please allow pop-ups " +
                    "or use the direct Gmail link below.";

                // Fallback: open Gmail in the current tab
                const fallbackLink = document.createElement("a");
                fallbackLink.href = gmailURL;
                fallbackLink.textContent = "Open Gmail to send your inquiry";
                fallbackLink.target = "_blank";
                fallbackLink.rel = "noopener";
                fallbackLink.className = "btn btn-secondary";

                formStatus.appendChild(document.createElement("br"));
                formStatus.appendChild(fallbackLink);
            } else {
                formStatus.textContent =
                    "Gmail opened! Review your inquiry and click Send.";
            }
        });
    }

    // ------------------------------------------
    // PRICING BUTTONS: SELECT A SERVICE
    // ------------------------------------------

    const serviceButtons = document.querySelectorAll(".service-button");
    const serviceSelect = document.getElementById("service");

    serviceButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedService = button.dataset.service;

            if (serviceSelect && selectedService) {

                const matchingOption = Array.from(
                    serviceSelect.options
                ).find(function (option) {
                    return option.value === selectedService ||
                           option.textContent.trim() === selectedService;
                });

                if (matchingOption) {
                    serviceSelect.value = matchingOption.value;
                }
            }
        });
    });

    // ------------------------------------------
    // FOOTER: AUTOMATIC COPYRIGHT YEAR
    // ------------------------------------------

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ------------------------------------------
    // MOBILE NAVIGATION
    // ------------------------------------------

    const menuButton = document.getElementById("menuButton");
    const navLinks = document.getElementById("navLinks");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            const isExpanded =
                menuButton.getAttribute("aria-expanded") === "true";

            menuButton.setAttribute(
                "aria-expanded",
                String(!isExpanded)
            );

            navLinks.classList.toggle("active", !isExpanded);
        });

        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

});