axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/comments"
}).then( value => console.log("%c++","background:green", value))
