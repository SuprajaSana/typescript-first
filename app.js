"use strict";
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const buttonEle = document.querySelector("button");
const numResult = [];
const stringResult = [];
function addNumbers(num1, num2) {
    if (num1 === "number" && num2 === "number") {
        return num1 + num2;
    }
    else if (num1 === "string" && num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResult(resultobj) {
    console.log(resultobj.val);
}
buttonEle === null || buttonEle === void 0 ? void 0 : buttonEle.addEventListener("click", () => {
    const num1 = number1.value;
    const num2 = number2.value;
    const result = addNumbers(+num1, +num2);
    numResult.push(result);
    const strResult = addNumbers(num1, num2);
    stringResult.push(strResult);
    printResult({ val: result, timeres: new Date() });
    console.log(numResult, stringResult);
});
const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("IT WORKED");
    }, 3000);
});
prom.then((result) => {
    console.log(result.split(" "));
});
