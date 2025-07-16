// Function to update the crust or sauce images
function updatePizza(layer, imagePath){
    const imgElement = document.getElementById(layer)
    imgElement.src = "assets/" + imagePath                  // Add 'assets/' before imagePath
    imgElement.style.display = "block"                      // Ensure it's visible
}


// Function to toggle toppings on and off
function toggleTopping(toppingId, imagePath){
    const toppingElement = document.getElementById(toppingId)

    if(
        toppingElement.style.display === "none" || toppingElement.style.display ===""){
        toppingElement.src = "assets/" + imagePath          // Add 'assets/' before imagePath
        toppingElement.style.display = "block"              // Show topping
    }else{
        toppingElement.style.display = "none"               // Hide topping
    }
}