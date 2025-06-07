/*
Fetching Data Class
Implement a class named UserFetcher with a method fetchUser(id) that fetches user data asynchronously (simulate using Promise with setTimeout). If the user ID is invalid, reject the promise. Handle errors appropriately.
 */

class UserFetcher {
    fetcherUser(id) {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                if( (typeof id) === "number" ) {
                    resolve("Promise resolved")
                } else {
                    reject(new Error("Promise rejected"))
                }
            }, 3000)
        })
    }
}

new UserFetcher().fetcherUser(123).then( res => console.log("%c++","background:green", res)).catch( err => console.log("%c++","background:green", err));
new UserFetcher().fetcherUser("456").then( res => console.log("%c++","background:green", res)).catch( err => console.log("%c++","background:green", err));
