

const mongoose = require('mongoose');

const DbConnected =()=>{
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log("DB is successfully Connected");

    }catch(err){
        console.log("DB is not Connectd");
    }
}

module.exports = DbConnected;