/**
 * Handles the contact form submission.
 * @function
 * @param {Event} event - The form submission event.
 */
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const form = document.querySelector("form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    if (name && email && message) {
        const mailToLink = `mailto:restrepoliu@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
        window.location.href = mailToLink;
        alert(`Thank you, ${name}, for reaching out!`);
        form.reset();
    } else {
        alert("Please fill out all the fields!");
    }
}
/**
 * Adds fade-in effect on page load.
 */
function fadeIn() {
    document.body.style.opacity = "1"; // Make body fully visible
}

/**
 * Adds fade-out effect before navigating to a new page.
 */
function fadeOut() {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !href.startsWith("mailto:")) {
                event.preventDefault();
                document.body.style.opacity = "0"; // Start fade-out
                setTimeout(() => {
                    window.location.href = href;
                }, 500); // Match this to the CSS transition duration
            }
        });
    });
}

// Initialize transitions
document.addEventListener("DOMContentLoaded", function () {
    fadeIn(); // Trigger fade-in effect on page load
    fadeOut(); // Handle fade-out effect during navigation
});
