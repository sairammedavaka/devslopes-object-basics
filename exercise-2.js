/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT //

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT //

// YOUR WORK GOES HERE //

// CODE 1
for (let key of Object.keys(papaJohns)) {
  console.log(key, typeof papaJohns[key]);
}

// CODE 2
papaJohns.grabCategories = function (obj) {
  console.log(Object.keys(obj));
};
papaJohns.grabCategories(papaJohns);

// CODE 3 & 4
papaJohns.retrivePizzaToppings = function (obj, name) {
  if (obj.hasOwnProperty(name)) {
    console.log(Object.keys(obj[name]));
  } else {
    console.log([]);
  }
};
papaJohns.retrivePizzaToppings(papaJohns, "pizzaToppings");

// CODE 5 & 6
papaJohns.verifyValues = function (obj, val) {
  if (Object.values(obj).length === val) {
    return true;
  } else {
    return false;
  }
};
console.log(papaJohns.verifyValues(papaJohns, 12));

// CODE 7
papaJohns["getToppingsInfo"] = function (obj, name) {
  console.log(Object.entries(obj[name]));
};
papaJohns.getToppingsInfo(papaJohns, "pizzaToppings");

// CODE 8
papaJohns.printAd = function (obj, name) {
  console.log(
    `Welcome to Papa John's! We are located at 555 Main Street. This week, we are having a sale on ${name} for ${obj["pizzaToppings"][name]}. Better Ingredients. Better Pizza. Papa John's.`
  );
};
papaJohns.printAd(papaJohns, "bacon");
