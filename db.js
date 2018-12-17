const mongoose = require('mongoose');




module.exports = mongoose.connect('mongodb://localhost:27017/ExpressJS', ({
    useNewUrlParser: true
}), (err) => {
    if (err) {
        throw err;
    }
    console.log("Databse Connected");
})