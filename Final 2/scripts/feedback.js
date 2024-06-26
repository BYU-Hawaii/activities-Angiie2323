//Feedback form message
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    document.getElementById('message').textContent = 'Thank you for submitting the feedback!';
    document.getElementById('feedbackForm').reset(); // Optionally reset the form fields
});
