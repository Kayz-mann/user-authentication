const mongoose = require("mongoose");


const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    });

    console.log("MongoDB connected")
}

module.exports = connectDB

// const connectDB  = URI
// const URI = process.env.MONGODB_URL
// mongoose.connect(URI, {
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, err =>{
//     if(err) throw err;
//     console.log('Connected to MongoDB')
// })


// module.exports = connectDB
