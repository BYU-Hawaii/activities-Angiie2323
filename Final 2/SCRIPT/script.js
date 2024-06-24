document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;
    const rating = document.getElementById('rating').value;

    if (!name || !email || !comments || !rating) {
        document.getElementById('message').textContent = 'Please fill in all fields.';
        return;
    }

    const feedback = {
        name: name,
        email: email,
        comments: comments,
        rating: rating
    };

    let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push(feedback);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    document.getElementById('message').textContent = 'Thank you for your feedback!';
    document.getElementById('feedbackForm').reset();
});
