const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;

app.get('/', (req, res) => {
    res.send("Hello world");
})
app.listen(port, () => {
    console.log(`server is running on ${port} this port`);
})