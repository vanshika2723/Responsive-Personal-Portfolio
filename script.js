/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
            menuToggle.setAttribute(
                "aria-label",
                "Close navigation menu"
            );
        } else {
            menuToggle.innerHTML = "☰";
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }

    });


    /* Close menu after clicking a link */

    const navigationLinks =
        navLinks.querySelectorAll("a");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.innerHTML = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* =========================================================
   CONTACT FORM VALIDATION
========================================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        /* Get form fields */

        const name =
            document.getElementById("name");

        const email =
            document.getElementById("email");

        const subject =
            document.getElementById("subject");

        const message =
            document.getElementById("message");


        /* Error elements */

        const nameError =
            document.getElementById("nameError");

        const emailError =
            document.getElementById("emailError");

        const subjectError =
            document.getElementById("subjectError");

        const messageError =
            document.getElementById("messageError");

        const formSuccess =
            document.getElementById("formSuccess");


        /* Clear old messages */

        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";
        formSuccess.textContent = "";


        let isValid = true;


        /* =====================================================
           NAME VALIDATION
        ====================================================== */

        if (name.value.trim() === "") {

            nameError.textContent =
                "Please enter your name.";

            isValid = false;

        } else if (name.value.trim().length < 2) {

            nameError.textContent =
                "Name must contain at least 2 characters.";

            isValid = false;

        }


        /* =====================================================
           EMAIL VALIDATION
        ====================================================== */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email.value.trim() === "") {

            emailError.textContent =
                "Please enter your email.";

            isValid = false;

        } else if (!emailPattern.test(email.value.trim())) {

            emailError.textContent =
                "Please enter a valid email address.";

            isValid = false;

        }


        /* =====================================================
           SUBJECT VALIDATION
        ====================================================== */

        if (subject.value.trim() === "") {

            subjectError.textContent =
                "Please enter a subject.";

            isValid = false;

        }


        /* =====================================================
           MESSAGE VALIDATION
        ====================================================== */

        if (message.value.trim() === "") {

            messageError.textContent =
                "Please enter your message.";

            isValid = false;

        } else if (message.value.trim().length < 10) {

            messageError.textContent =
                "Message should contain at least 10 characters.";

            isValid = false;

        }


        /* =====================================================
           SUCCESS
        ====================================================== */

        if (isValid) {

            formSuccess.textContent =
                "✓ Thank you! Your message has been submitted successfully.";

            contactForm.reset();

        }

    });

}


/* =========================================================
   ACTIVE NAVIGATION ON SCROLL
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


const navigationItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationItems.forEach((link) => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");


        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   SCROLL REVEAL EFFECT
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-content, .stat-card, .skill-card, .service-card, .project-card, .timeline-item, .certificate-card, .contact-content"
    );


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const copyright =
    document.querySelector(".copyright");


if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Vanshika Khandelwal. All Rights Reserved.`;

}