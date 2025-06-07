/*
Promise with Async/Await in Class Methods
Create a class Timer with a method waitAndPrint(seconds) that uses async/await to wait for the given number of seconds and then prints "Waited X seconds"
 */

class Timer {
    async waitAndPrint(secs) {
        await new Promise( resolve => setTimeout( resolve, secs * 1000 ) );
        console.log("%c++","background:green", `Waited ${secs} seconds`);
    }
}

new Timer().waitAndPrint(3).then();
