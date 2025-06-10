/*
Exercise 7: Class-based Debounce with Promise
Create a class Debouncer with a method execute(taskFn, delay) that ensures an asynchronous task (returning a promise) executes only after no new tasks have been added within a specified delay period.
 */

class Debouncer {
    timerId;

    execute(taskFn, delay) {
        clearTimeout(this.timerId);

        this.timerId = setTimeout(taskFn, delay * 1000)
    }
}

const examp = new Debouncer();
examp.execute(() => console.log("%c++","background:green", "Task1"), 2)
examp.execute(() => console.log("%c++","background:green", "Task2"), 2)
