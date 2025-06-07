/*
Promise Race in Class Method
Create a class RaceManager with a method startRace() that starts three asynchronous tasks with different timeouts. Use Promise.race() to log the result of the first task that completes.
 */

class RaceManager {
    startRace() {
        Promise.race([
            new Promise( resolve => setTimeout( () => resolve("First promise"), 2000)),
            new Promise( resolve => setTimeout( () => resolve("Second promise"), 1000)),
            new Promise( resolve => setTimeout( () => resolve("Third promise"), 3000)),
        ]).then( value => console.log("%c++","background:green", value))
    }
}

new RaceManager().startRace();
