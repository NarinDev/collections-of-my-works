/*Static Method Returning Promise
Create a class MathUtils with a static method multiplyAsync(a, b) that returns a promise resolving with the product of two numbers after 2 seconds. Use this method without instantiating the class.
*/

class MathUtils {
    static multiplyAsync(a, b) {
        return new Promise((resolve) => {
            setTimeout(() => resolve( a*b ), 2000);
        })
    }
}

MathUtils.multiplyAsync( 2, 4 ).then( value => console.log("%c++","background:green", value))
