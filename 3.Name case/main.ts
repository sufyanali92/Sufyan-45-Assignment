let personName: string = "Sufyan Ali";
console.log("Lower Case =", personName.toLowerCase());
console.log("Upper Case =", personName.toUpperCase());
console.log("Title Case =", personName.replace(/\b\w/g, (chase) => chase.toUpperCase()));
