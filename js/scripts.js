// Get modal elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.getElementById('closeBtn');

// Get all thumbnails
const thumbnails = document.querySelectorAll('.thumbnail');

// Function to open modal with the clicked image
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function () {
    const fullImageURL = this.getAttribute('data-full');
    modalImage.src = fullImageURL;
    modal.style.display = 'flex';
  });
});

// Function to close modal when clicking the close button
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

// Optional: Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
