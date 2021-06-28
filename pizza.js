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


var CrustType = [
    "Hand tossed",
    "Thin and Crispy",
    "Deep Dish"
];

var SauceType = [
    "Tradional",
    "Buffalo",
    "Marinara",
    "Alfredo"
];

var Cheeses = [
    "Mozzerrella",
    "Gargonzola",
    "Feta",
    "Chedder"
];

var Toppings = [
    "Pepporini",
    "Chicken",
    "Olives",
    "Ham",
    "Pineapple"
];

function randomRange(max, min){
    return Math.floor(Math.random() * max - min) + min;
}

function randomSelect(arr){
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}
function randomPizza(){
    var pizza = {}
    pizza.CrustType = randomSelect(CrustType);
    pizza.SauceType = randomSelect(SauceType);
    pizza.Cheeses = [];
    pizza.Toppings =  [];
    for(var i = 0; i < randomRange(3,1); i++){
        pizza.Cheeses.push(randomSelect(Cheeses));
    }
    for(var i = 0; i < randomRange(4,1); i++){
        pizza.Toppings.push(randomSelect(Toppings));
    }
    return pizza;
}
console.log(randomPizza())