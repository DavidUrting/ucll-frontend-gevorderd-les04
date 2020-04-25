console.log("*** var-let-const.js ***");

/*
 * const
 */
console.log("- const");

const PI = 3.14;
console.log("PI: " + PI);

try {
    PI = 3.14159;
}
catch (e) {
    console.log("PI (changed): " + e);
}




/*
 * var
 */
console.log("- var");
console.log("-- var scoping");
// Voorbeeld komt van https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
(function () {
    var x = 1;

    if (x === 1) {
        var x = 2;

        console.log(x);
        // expected output: 2
    }

    console.log(x);
// expected output: 2
})();
console.log("-- var hoisting");
(function () {
    var x = 1;
    console.log(x + " " + y);
    var y = 2;

    // Eigenlijk staat hier volgende code:
    // var x = 1
    // var y;
    // console.loge(x + " " + y);
    // y = 2;
    // Alle declaraties worden dus naar voren gehoist.
    // Vandaar wordt er dus geen foutmelding gegeven bij het gebruik van y.
    // y heeft echter nog geen waarde gekregen waardoor je 'undefined' ziet.
})();


/*
 * let
 */
console.log("- let");
console.log("-- let scoping");
(function () {
    // Voorbeeld komt van https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
    let x = 1;

    if (x === 1) {
        let x = 2;

        console.log(x);
        // expected output: 2
    }

    console.log(x);
    // expected output: 2
})();
console.log("-- geen let hoisting");
(function () {
    let x = 1;
    try {
        console.log(x + " " + y);
    }
    catch (e) {
        console.log("Een 'let' variabele gebruiken vooraleer deze gedeclareerd is; is niet toegelaten.");
    }
    let y = 2;
})();