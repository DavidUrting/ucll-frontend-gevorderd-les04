console.log("*** conditional.js ***");

var age = 80;
var reduction = 0;
if (age < 18) {
    reduction = 0.10;
}
else if (age >= 65) {
    reduction = 0.05;
}
console.log("reduction: " + (reduction * 100) + "%");

var state = 1;
switch (state) {
    case 0:
        console.log("idle");
        break;
    case 1:
    case 2:
        console.log("connecting...");
        break;
    case 3:
        console.log("connected");
        break;
    default:
        console.log("Unknown");
}
