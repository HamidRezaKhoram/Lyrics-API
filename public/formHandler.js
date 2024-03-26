// public/formHandler.js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('updateForm');
  const loadingIndicator = document.getElementById('loadingIndicator');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    loadingIndicator.style.display = 'block';

    // Extract form data
    const formData = new FormData(form);
    const author = formData.get('author');
    const songName = formData.get('songName');

    // Simulate an API call with a delay
    setTimeout(() => {
      loadingIndicator.style.display = 'none';
      alert(`Content updated with author: ${author} and song name: ${songName}`);
      form.reset(); // Reset form fields after submission for demonstration
    }, 1000);
  });
});
