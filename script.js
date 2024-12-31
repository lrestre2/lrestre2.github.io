/**
 * Handles the contact form submission.
 * @function
 * @param {string} message - The message to be sent.
 */
function handleFormSubmit(message) {
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

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
});

