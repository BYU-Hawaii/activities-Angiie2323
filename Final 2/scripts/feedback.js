//Feedback form message
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;
    if (!name || !email || !comments) {
        alert('Please fill in all fields.');
        return;
    }
    document.getElementById('message').textContent = 'Thank you for submitting your feedback!';
    document.getElementById('feedbackForm').reset();
});
