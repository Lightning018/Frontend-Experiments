const toggleButton = document.getElementById('toggleButton');
const overlay = document.getElementById('overlay');

toggleButton.addEventListener('click', function() {
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
});
