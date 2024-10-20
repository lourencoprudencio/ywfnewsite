// JavaScript for carousel functionality

document.addEventListener('DOMContentLoaded', () => {
    // Select the carousel track and its children (items)
    const track = document.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');

    // Get the width of the first item
    const itemWidth = items[0].getBoundingClientRect().width;
    console.log('Item width:', itemWidth); // Log the width of the carousel items

    // Arrange items next to each other
    const setItemPosition = (item, index) => {
        item.style.left = `${itemWidth * index}px`;
        console.log(`Position set for item ${index}: ${item.style.left}`); // Log the position of each item
    };

    items.forEach(setItemPosition); // Apply position to each item

    // Function to move to the next item
    const moveToNextItem = () => {
        const currentItem = track.querySelector('.collection-item'); // Find the current item
        const nextItem = currentItem.nextElementSibling || items[0]; // Get the next item or the first item if at the end

        console.log('Current item:', currentItem); // Log the current item
        console.log('Next item:', nextItem); // Log the next item

        track.style.transform = `translateX(-${nextItem.style.left})`; // Move the track to the next item
        currentItem.classList.remove('collection-item'); // Remove class from current item
        nextItem.classList.add('collection-item'); // Add class to next item
    };

    // Function to move to the previous item
    const moveToPrevItem = () => {
        const currentItem = track.querySelector('.collection-item'); // Find the current item
        const prevItem = currentItem.previousElementSibling || items[items.length - 1]; // Get the previous item or the last item if at the start

        console.log('Current item:', currentItem); // Log the current item
        console.log('Previous item:', prevItem); // Log the previous item

        track.style.transform = `translateX(-${prevItem.style.left})`; // Move the track to the previous item
        currentItem.classList.remove('collection-item'); // Remove class from current item
        prevItem.classList.add('collection-item'); // Add class to previous item
    };

    // Add event listeners for the navigation buttons
    nextButton.addEventListener('click', () => {
        console.log('Next button clicked'); // Log when the next button is clicked
        moveToNextItem();
    });

    prevButton.addEventListener('click', () => {
        console.log('Previous button clicked'); // Log when the previous button is clicked
        moveToPrevItem();
    });
});