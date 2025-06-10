/*
Cancelable Promises
Create a class CancelableTask where methods return promises that can be cancelled midway through their execution. When cancelled, promises should reject with "Cancelled".
 */

class CancelableTask {
    promiseRejector;

    startPromise() {
        return new Promise(((resolve, reject) => {
            setTimeout(() => resolve("Resolved"), 2000)
            this.promiseRejector = () => reject("Canceled")
        }))
    }


}

const examp = new CancelableTask();
examp.startPromise().catch( err => console.log("%c++","background:green", err)).then( result => console.log("%c++","background:green", result))
setTimeout( examp.promiseRejector, 2000 )

class CancelPromise2 {
    todo = true;

    makePromise(callback) {
        callback?.();
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(this.todo) {
                    resolve()
                } else {
                    reject("Canceled")
                }
            })
        })
    }

    cancel() {
        this.todo = false;
    }
}

const examp2 = new CancelPromise2();
examp2.makePromise().catch(err => console.log("%c++","background:green", err))
