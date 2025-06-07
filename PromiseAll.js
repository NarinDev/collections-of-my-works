/*
Promise.all within Class Method
Create a class BatchProcessor with a method processTasks() that uses Promise.all() to process three tasks simultaneously (resolving after 1, 2, and 3 seconds respectively), and logs "All tasks completed!" when done.
 */

class BatchProcessor {
    processTasks() {
        Promise.all([
            new Promise( resolve => setTimeout( resolve, 1000 )),
            new Promise( resolve => setTimeout( resolve, 2000 )),
            new Promise( resolve => setTimeout( resolve, 3000 ))
        ]).then( value => console.log("%c++","background:green", "All tasks completed!"))
    }
}

new BatchProcessor().processTasks();
