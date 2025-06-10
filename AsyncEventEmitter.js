/*
Exercise 5: Asynchronous Event Emitter
Create a class AsyncEventEmitter that manages events and handlers. Handlers can be asynchronous (returning promises). When an event is emitted, wait for all handlers to complete before proceeding.
 */

class AsyncEventEmitter {
    events = {};

    on(eventName, ...handlers) {
        if( !this.events[eventName] ) {
            this.events[eventName] = handlers;
        } else {
                this.events[eventName].push(...handlers);
        }
    }

    emit(eventName, ...dopArgs) {
        const handlers = this.events[eventName] || [];

        const promises = handlers.map( value => value(...dopArgs))
        console.log("%c++","background:green", promises)
        Promise.all(promises)
    }
}

//const EventEmitter = require("events");
//EventEmitter.emit("myEvent", { message: "Hello world!" });

const examp = new AsyncEventEmitter();
examp.on("myEvent",
    async (message) => message,
    async (message) => message,
    async (message) => console.log("%c++","background:green", message)
)
examp.emit("myEvent")
examp.emit("myEvent2")
