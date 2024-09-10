// JavaScript for carousel functionality

document.addEventListener('DOMContentLoaded', () => {
    // Select the carousel track and its children (items)
    const track = document.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    
    // Get the width of the first item
    const itemWidth = items[0].getBoundingClientRect().width;

    // Arrange items next to each other
    const setItemPosition = (item, index) => {
        item.style.left = `${itemWidth * index}px`;
    };

    items.forEach(setItemPosition); // Apply position to each item

    // Function to move to the next item
    const moveToNextItem = () => {
        const currentItem = track.querySelector('.collection-item'); // Find the current item
        const nextItem = currentItem.nextElementSibling || items[0]; // Get the next item or the first item if at the end
        track.style.transform = `translateX(-${nextItem.style.left})`; // Move the track to the next item
    };

    // Function to move to the previous item
    const moveToPrevItem = () => {
        const currentItem = track.querySelector('.collection-item'); // Find the current item
        const prevItem = currentItem.previousElementSibling || items[items.length - 1]; // Get the previous item or the last item if at the start
        track.style.transform = `translateX(-${prevItem.style.left})`; // Move the track to the previous item
    };

    // Add event listeners for the navigation buttons
    nextButton.addEventListener('click', moveToNextItem);
    prevButton.addEventListener('click', moveToPrevItem);
});