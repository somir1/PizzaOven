function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.Crust = crustType;
    pizza.Sauce = sauceType;
    pizza.Cheese = cheeses;
    pizza.Toppings = toppings;
    return pizza
}
var p1 = pizzaOven("Deep Dish", "Traditional", ["Mozzerlla"], "Pepporoni");
console.log(p1);

var p2 = pizzaOven("Hand tossed", "Marinara", ["Mozzerlla", "Feta"], ["Pepporoni","Olives","Onions"]);
console.log(p2);

var p3 = pizzaOven("Hand tossed", "Traditional", ["Mozzerlla"], ["Chicken", "Banana Peppers"]);
console.log(p3);

var p4 = pizzaOven("Hand tossed", "Traditional", ["Gargonzola"], ["Chicken", "Banana Peppers", "Pineapple"]);
console.log(p4);

function randomPizza(){

}
