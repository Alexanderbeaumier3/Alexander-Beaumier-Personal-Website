// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all project boxes
    var projectBoxes = document.querySelectorAll('.project');

    // Iterate through each project box
    projectBoxes.forEach(function(box) {
        // Add click event listener to each project box
        box.addEventListener('click', function() {
            // Toggle the visibility of the description text (dd element)
            var description = this.querySelector('dd');
            description.classList.toggle('show');
        });
    });
});