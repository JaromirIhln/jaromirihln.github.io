// This script handles the lightbox gallery functionality
// It allows users to view images in a modal with navigation controls
// and captions.
// Get the modal element and unhide it when 
// the user clicks on an link on dropdown menu
function openModal() {
    document.getElementById("myModal").style.display = "block";
}
// Close the modal when the user clicks on the anywhere in the document
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
// Define the slide index variable to keep track of the current slide
var slideIndex = 1;
// Initialize the slide index to 1 (the first slide)
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Thumbnail image controls
// This function is called when a thumbnail image is clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show slides function
function showSlides(n) {
    // Get all slides and dots, and the caption text element
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("gallery");
    var captionText = document.getElementById("caption");
    // If n is greater than the number of slides, reset to 1; if less than 1, set to the last slide
    if (n > slides.length) { slideIndex = 1 }
    // If n is less than 1, set to the last slide
    if (n < 1) { slideIndex = slides.length }
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    // Remove the "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Display the current slide and set the active class on the corresponding dot
    slides[slideIndex - 1].style.display = "block";  
    // Add the "active" class to the current dot
    dots[slideIndex - 1].className += " active";
    // Set the caption text - replace with the alt text of the image
    captionText.innerHTML = dots[slideIndex - 1].alt; 
}