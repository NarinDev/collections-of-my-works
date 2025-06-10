/*
Class with Async Error Handling
Create a class Calculator with asynchronous methods divide(a, b) and squareRoot(x) that both return promises. Add error handling to manage division by zero and negative numbers for the square root.
 */

class Calculator {
    async divide(a,b) {
        return new Promise( (resolve, reject) => {
            if( a != 0 && b != 0 ) {
                resolve( a / b );
            }
        })
    }
}
