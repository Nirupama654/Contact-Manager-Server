const config = require('./db.config');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dbConn = async() => {
    // try {
    //     await mongoose.connect(config.uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
    //         console.log("Connected to database");
    //     })
    // } catch (err) {
    //     console.log(err);
    // }

    mongoose.connect('mongodb://127.0.0.1:27017/task_manager',{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
    .then(()=>console.log("Database Connected"))
    .catch((error)=>console.log(error))
}

module.exports = dbConn;