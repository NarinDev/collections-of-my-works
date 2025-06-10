const express = require("express");
const app = express();
const axios = require("axios")

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.get("/todos", (req, res) => {
    res.send({
        data: "got request"
    })
})


app.get("/posts", (req, res) => {
    axios({
        method: "get",
        url: "https://jsonplaceholder.org/posts"
    }).then( value => {
        res.send({
            data: value.data
        })
    })
})

app.get("/post", (req, res) => {
    console.log('%c++===HERE 2','background: lime', `https://jsonplaceholder.org/posts/${req.query.postId}`)
    axios({
        method: "get",
        url: `https://jsonplaceholder.org/posts/${req.query.postId}`
    }).then( value => {
        res.send({
            data: value.data
        })
    })
})

app.get("/users", (req, res) => {
    axios({
        method: "get",
        url: "https://jsonplaceholder.org/users"
    }).then( value => {
        res.send({
            data: value.data
        })
    })
})

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"))
})
// app.use((request, respose) => {
//     respose.status(404);
//     console.log(__dirname)
//     //console.log(request)
//     respose.send(`<h1>Error 404</h1>`)
// })
app.listen(3000, () => {
    console.log('app listening on port 3000')
})
