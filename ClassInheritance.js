/*
Class Inheritance with Promises
Define a base class Fetcher with a method fetch() that returns a promise resolving with "Fetching data...". Create a derived class APIFetcher that overrides this method to return a promise
resolving with "Fetching API data...".
 */

class Fetcher {
    phrase = "Fetching data..."

    fetch() {
        return new Promise( resolve => resolve(this.phrase))
    }
}

class APIFetcher extends Fetcher {
    phrase = "Fetching API data..."
    fetch() {
        return super.fetch();
    }
}

new Fetcher().fetch().then( value => console.log("%c++","background:green", value ) ) 
new APIFetcher().fetch().then( value => console.log("%c++","background:green", value ) )
