// Ensure the emailjs library is loaded
console.log("Script loaded");

// Initialize EmailJS with your User ID
emailjs.init("4YmKiws4qsBg_z0dR");  // Replace with your actual User ID

// Add event listener to the contact form
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Disable the submit button to prevent multiple submissions
    const submitButton = document.getElementById('submit');
    submitButton.disabled = true;  // Disable button
    submitButton.innerHTML = 'Sending...';  // Change text to "Sending..."

    console.log("Form submitted");

    // Collect form data
    const formData = new FormData(event.target);

    // Send the form data using EmailJS service
    emailjs.sendForm("service_jf7h128","template_lpp2bzn", formData)
        .then(function(response) {
            console.log("Email sent successfully", response);
            
            // Update the button text to "Message Sent" on success
            submitButton.innerHTML = 'Message Sent';
            submitButton.style.backgroundColor = "#4CAF50"; // Optional: Change button color for success
            submitButton.disabled = false; // Re-enable the button after submission

            // Optionally show a success message to the user
            alert('Message sent successfully!');
        }, function(error) {
            console.log("Error in sending email", error);

            // Update the button text back to "Send Message" on failure
            submitButton.innerHTML = 'Send Message';
            submitButton.disabled = false; // Re-enable the button

            // Optionally show an error message to the user
            alert('Failed to send message, please try again.');
        });
});
