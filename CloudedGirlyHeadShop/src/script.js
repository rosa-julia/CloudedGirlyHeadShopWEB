// This file contains JavaScript code that adds interactivity to the site. 
// It listens for click events on elements with the class 'shop-btn' 
// and displays an alert when an item is added to the cart.

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.shop-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart!');
        });
    });
});