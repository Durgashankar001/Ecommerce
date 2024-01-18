const mongoose = require("mongoose")


const connect = () => {
    try{
        return mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
    }
    catch(err){
        console.log(`Error = ${err}`)
    }
}

module.exports = connect


// "mongodb+srv://durgashankar:Bapun%40123@cluster0.1itujcx.mongodb.net/ecommerce"