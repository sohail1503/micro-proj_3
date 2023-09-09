const foodData = require('./food.json')


//list all food items
function listAllFoodItems(data) {
    return data.map((food) => {
        return food.foodname
    })
}

//list all food items by category
function listFoodItemsByCategory(data, category) {
    return data.filter((food) => food.category === category)
}

//list all items with calorie
function listAllFoodItemsByCalorie(data, above) {
    return data.filter((food) => {
        return above ? food.calorie > 100 : food.calorie < 100
    })
}

//list all items highest to lowest protien
function listAllFoodItemsByProtien(data) {
    return data.slice().sort((a, b) => b.protiens - a.protiens)
}

//list all items lowest to highest cab
function listAllFoodItemsByCab(data) {
    return data.slice().sort((a, b) => a.cab - b.cab)
}


//  list all the food items
console.log("All Food Items:");
console.log(listAllFoodItems(foodData));

//  list all the food items with category vegetables
console.log("\nVegetables:");
console.log(listFoodItemsByCategory(foodData, "Vegetable"));

//  list all the food items with category fruit
console.log("\nFruits:");
console.log(listFoodItemsByCategory(foodData, "Fruit"));

//  list all the food items with category protein
console.log("\nProteins:");
console.log(listFoodItemsByCategory(foodData, "Protein"));

//  list all the food items with category nuts
console.log("\nNuts:");
console.log(listFoodItemsByCategory(foodData, "Nuts"));

//  list all the food items with category grains
console.log("\nGrains:");
console.log(listFoodItemsByCategory(foodData, "Grain"));

//  list all the food items with category dairy
console.log("\nDairy:");
console.log(listFoodItemsByCategory(foodData, "Dairy"));

//  list all the food items with calorie above 100
console.log("\nFood Items with Calorie Above 100:");
console.log(listAllFoodItemsByCalorie(foodData, true));

//  list all the food items with calorie below 100
console.log("\nFood Items with Calorie Below 100:");
console.log(listAllFoodItemsByCalorie(foodData, false));

//  list all the food items with highest protein content to lowest
console.log("\nFood Items Sorted by Highest Protein Content:");
console.log(listAllFoodItemsByProtien(foodData));

//  list all the food items with lowest cab content to highest
console.log("\nFood Items Sorted by Lowest Cab Content:");
console.log(listAllFoodItemsByCab(foodData));