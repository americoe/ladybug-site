// Example of making the ladybug move on a button click
const ladybugElement = document.getElementById('ladybug');

ladybugElement.addEventListener('click', function() {
    // Change the ladybug's position or color when clicked
    ladybugElement.style.backgroundColor = 'orange'; 
    console.log("Ladybug has been clicked!");
});