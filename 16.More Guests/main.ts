let guestlist = ["Sameer", "Ahmed", "Faisal", "Salman"];
let Guest1 = guestlist[0];
guestlist.splice(0, 1, "Kashan");
console.log("We have found a bigger Dinner Table for Respectable Guests")
guestlist.unshift("kamran");
guestlist.push("Raza");
let middleGuest: number = Math.floor(guestlist.length / 2);
guestlist.splice(middleGuest, 0, "Azfer");
console.log("Our new Guests are updated list");
console.log(Guest1, "can not come to Dinner today.");
guestlist.forEach(guests=>console.log(`Hi ${guests}, would like to Dinner with me?`));