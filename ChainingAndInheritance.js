/*
Multi-level Inheritance with Async Methods
Define three classes: Animal, Mammal (inherits Animal), and Dog (inherits Mammal). Each class should have an asynchronous method getType() returning a string describing its type after a delay.
Demonstrate promise chaining across inheritance.
 */

class Animal {
    type = "animal";
    getType() {
        return new Promise( resolve => setTimeout( () => resolve( this.type ), 2000));
    }
}

class Mammal extends Animal {
    constructor() {
        super();
    }

    type = "mammal";
    getType() {
        return super.getType();
    }
}

class Dog extends Mammal {
    constructor() {
        super();
    }

    type = "dog";
    getType() {
        return super.getType();
    }
}

new Dog().getType().then( value => console.log("%c++","background:green", value))
