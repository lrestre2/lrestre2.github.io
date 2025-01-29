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
                document.body.style.opacity = "0"; 
                setTimeout(() => {
                    window.location.href = href;
                }, 500); 
            }
        });
    });
}

// Initialize transitions
document.addEventListener("DOMContentLoaded", function () {
    fadeIn();
    fadeOut();
});
