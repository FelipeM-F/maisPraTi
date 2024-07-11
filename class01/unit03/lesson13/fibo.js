function* fibonacci() {
    let a = 0;
    let b = 1;
    let i=0;
    while (i<4) {
        i++;
        yield a;
        [a, b] = [b, a + b];
    }
}

let generator = fibonacci();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());