const mongoose = require("mongoose");

const url = "mongodb+srv://vishva:Px4v6GBnhZseRnIM@multi-vendor-db.12r5t8k.mongodb.net/multi-vendor-db?retryWrites=true&w=majority";
mongoose.connect(url);

const connectDb = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connection successfully");
    }
    catch (error) {
        console.error("connection failed");
        process.exit(0);
    }
}
module.exports = connectDb;