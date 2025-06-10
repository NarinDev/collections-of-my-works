/*
Complex Chainable API
Build a class AsyncMath with methods add, subtract, multiply, and divide. Each method is asynchronous (using promises) and returns the class instance itself, allowing methods to be chained.
Finally, add an async method getResult() to fetch the final result
 */

class AsyncMath {

    constructor(num) {
        this.num = num;
    }

    async add(x) {
        this.num += x;
        return this;
    }

    async subtract(x) {
        this.num -= x;
        return this;
    }

    async multiply(x) {
        this.num *= x;
        return this;
    }

    async divide(x) {
        if( x != 0 ) {
            this.num /= x;
        }
        return this;
    }

    async getResult() {
        return this.num;
    }
}

const examp = new AsyncMath(4);
examp.add(1)
    .then( value => value.multiply(2))
    .then( value => value.subtract(1))
    .then( value => value.divide(3))
    .then( value => value.getResult().then( value => console.log("%c++","background:green", value)));
