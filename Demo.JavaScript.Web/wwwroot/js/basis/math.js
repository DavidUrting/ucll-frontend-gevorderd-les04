for (let i = 1; i <= 7; i++) {
    // [0, 1[ -> [1, 45]

    let willekeurigGetal = Math.round(Math.random() * 45);
    let geldigWillekeurigGetal = Math.max(1, willekeurigGetal);
    document.getElementById("bal" + i).value = geldigWillekeurigGetal;
}
