function* myGenerator() {
    let i = 0;
    while (true) {
        yield 5;
        console.log("voltando...");
        yield 10;
        console.log("voltando... de novo");
    }
}

let generator = myGenerator();
let generatorValue = generator.next();
let generatorValue2 = generator.next();
// let generatorValue3 = generator.next();
// let generatorValue4 = generator.next();



console.log(generatorValue);
// console.log(generatorValue2);
// console.log(generatorValue3);
// console.log(generatorValue4);