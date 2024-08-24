document.getElementById("joinUsForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capture form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display a success message (for now)
    alert("Thank you, " + name + "! We will contact you soon at " + email + ".");
    
    // Reset the form
    document.getElementById("joinUsForm").reset();
});
