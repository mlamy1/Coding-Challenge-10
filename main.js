//Task 2: Add Event Listeners for Product Selection

//Used to get reference to the size selector and product price 
document.addEventListener('DOMContentLoaded', () => {
    const sizeSelector = document.getElementById('size-selector'); 
    const productPrice = document.getElementById('product-price');
   const purchasebutton = document.getElementById('purchase-button'); // Task 3: Handle Stock Availability

    //Define prices for sizes
    const prices = {
        small: 5.00,
        medium: 10.00,
        large: 15.00
    };

    //Used add event listener to update price when size is selected
    sizeSelector.addEventListener('change', (event) => {
        const selectedSize = event.target.value;
        const product = stock[selectedSize]; // Task 3: Used to call stock data
        productPrice.textContent = `$${prices[selectedSize].toFixed(2)}`; 

        if (product.available) { //If else function used to identify when to disable purchase button
            purchasebutton.disabled = false;
        } else {
            purchasebutton.disabled = true;
        }

        //Task 4: Create a Checkout Event
        purchasebutton.addEventListener('click', () => {
            if(!purchasebutton.disabled) { //If button is not disable and is clicked,
                alert('Purchase Successful!'); //this message will display.
            } else {
                alert('This product is out of stock!'); //This message will display if otherwise. 
            }
         });
    });
});

// Task 3: Handle Stock Availability
//Stock data
 const stock = {
    small: {price: 5.00, available: true}, // Size in stock 
    medium: {price: 10.00, available: false}, //Size not in stock
    large: {price: 15.00, available: true} //Size in stock
 };


