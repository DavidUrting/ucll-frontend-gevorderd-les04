console.log("*** input.js ***");

/*
 * prompt
 */
// var input = prompt("1 + 1 =");

/*
 * HTML DOM
 */
document.getElementById("basics-input-dom-in").addEventListener("input", function () {
    document.getElementById("basics-input-dom-out").value = document.getElementById("basics-input-dom-in").value;
});

document.getElementById("basics-input-dom-button").addEventListener("click", function (e) {
    document.getElementById("basics-input-dom-out2").value = document.getElementById("basics-input-dom-in").value;
    e.preventDefault(); // De button mag geen postback/refresh triggeren.
});
