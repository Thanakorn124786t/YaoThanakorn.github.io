function sendMessage() {
    var userEmail = document.getElementById("userEmail").value;

    if (userEmail) {
        document.getElementById("thankYouMessage").style.display = "block";

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            user_email: userEmail
        })
            .then(function (response) {
                console.log("Success:", response);
            }, function (error) {
                console.log("Error:", error);
            });
    } else {
        alert("กรุณากรอกอีเมล");
    }
}


// Handle form submission and show the thank you message
document.querySelector('.suggestions-form').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the form from submitting

    // Show thank you message
    document.getElementById('thank-you-message').style.display = 'block';

    // Reset the form
    event.target.reset();

    // Hide the thank you message after 3 seconds
    setTimeout(function () {
        document.getElementById('thank-you-message').style.display = 'none';
    }, 3000);
});