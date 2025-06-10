/*
Paginated Data Loader
Create a class named Paginator with a method fetchPage(pageNumber) that simulates asynchronously loading data for each page. Implement logic to asynchronously load pages in sequence, stopping if any page fetch fails.
 */

class Paginator {
    async fetchPage(pageNumber) {
        for( let x = 0; x < pageNumber.length; ++x ) {
            try {
                const result = await pageNumber[x];
                console.log("%c++","background:green", result)
            } catch (err) {
                console.log("%c++","background:green", err)
                break
            }
        }
    }
}

const examp = new Paginator();
examp.fetchPage([
    new Promise( resolve => resolve("Promise1")),
    new Promise( (resolve, reject) => reject("Promise2 was rejected")),
    new Promise( resolve => resolve("Promise3") )
])
