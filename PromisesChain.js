/*
Promise Chaining in Class
Make a class NumberTransformer with methods double() and increment(). Both methods return promises. Chain these methods to double a number, then increment it, logging the result.
 */

class NumberTransformer {
    constructor(num) {
        this.num = num;
    }

    double() {
        return new Promise( resolve => resolve(this.num *= 2) );
    }

    increment() {
        return new Promise( resolve => resolve( ++this.num ))
    }
}

const example = new NumberTransformer(5);
example.double().then( value => example.increment() ).then( value => console.log("%c++","background:green", value))
