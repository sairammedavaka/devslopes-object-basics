/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

// CODE 1 & 2
const peacockDiner = {
  name: "peacock",
  cuisines: "Indo-Chinese",
  numberOfStars: 4.5,
  favorited: true,
};

// CODE 3
peacockDiner.address = "Opp. Bus Station, Karimnagar, Telangana, India";
peacockDiner["zipcode"] = 505001;
peacockDiner.acceptsReservations = true;

// CODE 4
peacockDiner.numberOfStars = 4.8;
peacockDiner.favorited = false;
peacockDiner.cuisines = ["Indo-Chinese", "Italian"];

// CODE 5
peacockDiner.retrieveProperty = function (propertyName) {
  if (peacockDiner.hasOwnProperty(propertyName)) {
    console.log(peacockDiner);
  } else {
    console.log("The information you requested does not exist.");
  }
};

// CODE 6
peacockDiner.InvokeFun = function (propertyName) {
  if (peacockDiner.hasOwnProperty(propertyName)) {
    console.log(peacockDiner[propertyName]);
  } else {
    console.log("does not exist");
  }
};
peacockDiner.InvokeFun("nickName");
