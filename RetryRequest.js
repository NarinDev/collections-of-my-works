/*
Retry Mechanism
Implement a class RetryRequest with a method fetchWithRetry that tries to simulate fetching data (promise-based) up to 3 times before giving up. Each attempt should wait 1 second before retrying.
 */

const MAX_ATTEMPTS = 3;
const axios = require("axios");

class RetryRequest {
    attemptsCount = 0;

    fetchWithRetry() {
        axios({
            method: "get",
            url: "http://localhost:3000/posts"
        })
            .then( res => console.log("%c++","background:green", res))
            .catch( err => {
                ++this.attemptsCount;
                if( this.attemptsCount <= MAX_ATTEMPTS ) {
                    console.log("%c++","background:green", "Here error three", this)
                    setTimeout( () => this.fetchWithRetry, 1000 )
                }
            })
    }
}

const examp = new RetryRequest();
examp.fetchWithRetry();
//process.stdin.resume();
