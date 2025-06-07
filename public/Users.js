axios({
    method: "get",
    url: "/users"
}).then( value => console.log("%c++","background:green", value));
