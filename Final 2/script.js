document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;
    const rating = document.getElementById('rating').value;

    const feedback = {
        name: name,
        email: email,
        comments: comments,
        rating: rating
    };

    // Retrieve existing feedbacks from local storage or initialize an empty array
    let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

    // Add the new feedback to the array
    feedbacks.push(feedback);

    // Save the updated feedback array to local storage
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    // Display a thank you message
    document.getElementById('message').textContent = 'Thank you for your feedback!';

    // Clear the form
    document.getElementById('feedbackForm').reset();
});
