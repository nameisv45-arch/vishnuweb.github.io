// Update year
document.getElementById("year").textContent = new Date().getFullYear();

// Fake form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("status").innerText = "Message sent (demo).";
    this.reset();
});
