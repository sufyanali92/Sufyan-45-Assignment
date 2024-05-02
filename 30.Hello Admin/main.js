"use strict";
// Using ForEach Loop on Array
let usernames = ["Eric", "Sameer", "Ahmed", "Faisal", "Salman"];
usernames.forEach(user => {
    if (user === "Admin") {
        console.log(`Hello ${user}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
});
