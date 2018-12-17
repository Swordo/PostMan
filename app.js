const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const db = require('./db.js');
const User = require('./models/users.js');
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

// Inserting the data
app.post('/', function (req, res) {
    var user = new User()
    user.name = req.body.name;
    user.email = req.body.email;
    user.save(function (err) {
        if (err) {
            throw err;
        }
        res.json({
            "Status": "success"
        });
    })
})
//Fetching data from mongoDB
app.get('/', (req, res) => {
    User.find({}, function (err, user) {
        if (err) {
            throw err;
        }
        res.json(user)
    })
})

// Delete Data 
app.delete('/:id', function (req, res) {
    User.remove({
        name: req.params.id
    }, function (err) {
        if (err) {
            throw err;
        }
        res.json({
            "Status": "Successfully Deleted"
        });
    });
})









app.listen(port, () => {
    console.log(`server is running on ${port} this port`);
})