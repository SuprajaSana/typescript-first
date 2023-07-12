const number1 = document.getElementById("num1") as HTMLInputElement;
const number2 = document.getElementById("num2") as HTMLInputElement;
const buttonEle = document.querySelector("button")

const numResult:Array<number> = [];
const stringResult: string[] = [];

type numberOrString = number | string;

interface resultObj{ val: number; timeres: Date }

function addNumbers(num1: numberOrString, num2: numberOrString) {
    if (num1 === "number" && num2 === "number") {
        return num1 + num2;
    } else if (num1 === "string" && num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}

function printResult(resultobj:resultObj ){
    console.log(resultobj.val)
}

buttonEle?.addEventListener("click", () => {
    const num1 = number1.value;
    const num2 = number2.value;
    const result = addNumbers(+num1, +num2)
    numResult.push(result as number);
    const strResult = addNumbers(num1, num2);
    stringResult.push(strResult as string);
    printResult({ val: result as number, timeres: new Date() })
    console.log(numResult,stringResult)
})

const prom = new Promise<string>((resolve, reject) => {
        setTimeout(()=> {
            resolve("IT WORKED");
        },3000)
})

prom.then((result) => {
    console.log(result.split(" "));
})