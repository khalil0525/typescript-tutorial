"use strict";
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [];
numbers.forEach((n) => n.toFixed());
let user = [1, "Mosh"];
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.12;
    return income * 1.3;
}
function calculateTaxWithOptional(income, taxYear) {
    if ((taxYear || 2022) < 2022)
        return income * 1.12;
    return income * 1.3;
}
function calculateTaxWithSetValue(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.12;
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = {
    id: 1,
    name: "Khalil",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
//# sourceMappingURL=index.js.map