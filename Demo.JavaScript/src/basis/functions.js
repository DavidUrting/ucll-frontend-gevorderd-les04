console.log("*** functions.js ***");
function add1(p1, p2) {
    return p1 + p2;
}

var add2 = function (p1, p2) {
    return p1 + p2;
};

var add3 = (p1, p2) => p1 + p2;

document.getElementById("basics-functions-decl").innerHTML = add1(1, 2);
document.getElementById("basics-functions-expr").innerHTML = add2(1, 2);
document.getElementById("basics-functions-arrow").innerHTML = add3(1, 2);
