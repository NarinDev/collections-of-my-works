const express = require("express");
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use((request, respose) => {
    respose.status(404);
    console.log(__dirname)
    //console.log(request)
    respose.send(`<h1>Error 404</h1>`)
})
app.listen(3000, () => {
    console.log('app listening on port 3000')
})
