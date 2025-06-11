class PromiseRequests {
    next;
    time = 0;
    timeReject = 0;

    constructor(time = 1000, timeReject = 2000) {
        this.time = time
        this.timeReject = timeReject;
    }

    asyncRequest() {
        // 1 .. 5
        const timeResolve = Math.floor(Math.random() * (5)) + 1;
        // 1..5
        const timeReject = Math.floor(Math.random() * (5)) + 1;
        console.log('%c++===','background: lime', {timeResolve, timeReject})
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Resolve')
            }, timeResolve)

            setTimeout(() => {
                reject('Reject')
            }, timeReject)
        })
    }
}

const req1 = new PromiseRequests();



class CircuitBreaker {
    errorCounter = 0;
    timeRequestAwait = 1000;

    runCircuitRequest() {
        let timerId
        const callBack = async () => {
            try {
                const result = await req1.asyncRequest();
                this.timeRequestAwait *= 1;
                this.errorCounter = 0;
                console.log('%c++===HERE RESULT', 'background: lime', result)
            } catch (e) {
                console.log('%c++===HERE ERROR', 'background: lime',)
                this.errorCounter++;
                if (this.errorCounter >= 3) {
                    this.timeRequestAwait *= 3;
                }
            }
            console.log('%c++===HERE BEFORE INNER SET TIMEOT', 'background: lime', this.errorCounter)
            timerId = setTimeout(callBack, this.timeRequestAwait);
        }
        timerId = setTimeout(callBack, this.timeRequestAwait);
    }
}

const circBreaker = new CircuitBreaker();
circBreaker.runCircuitRequest();


process.stdin.resume();
