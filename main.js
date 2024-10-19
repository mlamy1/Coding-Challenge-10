//Task 2: Add Event Listeners for Product Selection

//Used to get reference to the size selector and product price 
document.addEventListener('DOMContentLoaded', () => {
    const sizeSelector = document.getElementById('size-selector'); //
    const productPrice = document.getElementById('product-price');

    //Define prices for sizes
    const prices = {
        small: 5.00,
        medium: 10.00,
        large: 15.00
    };

    //Used add event listener to update price when size is selected
    sizeSelector.addEventListener('change', (event) => {
        const selectedSize = event.target.value;
        productPrice.textContent = `$${prices[selectedSize].toFixed(2)}`;
    });
});

