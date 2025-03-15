// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

dominos.printPizzaPlace = function () {
  for (let key in dominos) {
    console.log(key, dominos[key]);
  }
};
dominos.printPizzaPlace();

dominos.toppingsPriceRange = function () {
  let arr = [];
  for (let value of Object.values(dominos["pizzaToppings"])) {
    arr.push(value);
  }
  let minVal = Math.min(...arr);
  let maxVal = Math.max(...arr);
  return [maxVal, minVal];
};
console.log(dominos.toppingsPriceRange());

dominos.calculateAverageRating = function () {
  let totalVal = 0;
  let totalNum = 0;
  for (let value of Object.values(dominos["starReviews"])) {
    totalVal += value;
    totalNum += 1;
  }
  const avgVal = totalVal / totalNum;
  return avgVal.toFixed(2);
};
console.log(dominos.calculateAverageRating());
