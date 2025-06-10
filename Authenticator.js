/*
Class-based Authentication Flow
Implement a simplified class Authenticator that simulates login and session validation using promises. Handle multiple concurrent login requests, ensuring sessions are managed correctly without conflict.
 */
const sessions = [
    {
        userName: "John",
        login: new Date(2025, 5, 10, 15, 30, 0)
    },
    {
        userName: "Jane",
        login: new Date(2025, 5, 10, 15, 30, 50)
    },
    {
        userName: "Jack",
        login: new Date(2025, 5, 10, 16, 11, 0)
    }
]

class Authenticator {

    static login(user) {
        const session = sessions.find(item => item.userName === user);

        if( !session ) {
            console.log("%c++","background:green", "You are not loged in")
        } else {
            if( session.login.getTime() >= Date.now() ) {
                console.log("%c++","background:green", "You are loged in", session.login.getTime(), Date.now())
            } else {
                console.log("%c++","background:green", "Your session had expired")
            }
        }
    }
}

Authenticator.login("John");
Authenticator.login("Jane");
Authenticator.login("Jack");
Authenticator.login("Mary");
