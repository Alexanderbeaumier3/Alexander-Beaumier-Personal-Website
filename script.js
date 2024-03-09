document.addEventListener("DOMContentLoaded", function() {
    var projectBoxes = document.querySelectorAll('.project');

    projectBoxes.forEach(function(box) {
        box.addEventListener('click', function() {
            var description = this.querySelector('dd');
            description.classList.toggle('show');
        });
    });
});