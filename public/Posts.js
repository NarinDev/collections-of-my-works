axios({
    method: "get",
    url: "/posts"
}).then( value => console.log("%c++","background:green", value))
