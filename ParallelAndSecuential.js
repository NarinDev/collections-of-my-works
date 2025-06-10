/*
Exercise 8: Parallel and Sequential Promise Executor
Build a class named PromiseExecutor with two methods: executeParallel and executeSequential, each accepting an array of asynchronous functions. Execute the first method in parallel, and the second sequentially,
measuring and logging execution times.
 */

class PromiseExecutor {
    async executeParallel(funcs) {
        const start = Date.now();
        await Promise.allSettled(funcs.map( value => value() ));
        const end = Date.now()

        console.log("%c++","background:green", end - start)
    }

    async executeSequential(funcs) {
        const start = Date.now();
        for ( const func of funcs.map( value => value() ) ) {
             await func;
        }
        const end = Date.now()

        console.log("%c++","background:green", end - start)
    }
}

const examp = [
    async () => "1",
    async () => "2",
    async () => "3"
]
const executor = new PromiseExecutor();

executor.executeParallel(examp)
executor.executeSequential(examp)
