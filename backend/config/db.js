const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo Db connected: ${conn.connection.host}`);
    }catch(error){
        console.log("MongoDb connection failed", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;