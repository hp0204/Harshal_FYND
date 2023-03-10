// how to connect to mongodb using mongoose and node js

const mongoose = require("mongoose");
const { stringify } = require("querystring");
3
const url = "mongodb://127.0.0.1:27017/";

const userSchema = new mongoose.Schema(
    {
        _id: Number,
        username: String,
        email: String,
    },
    { _id: false}
);

const User = new mongoose.model("users", userSchema);
async function run(){
    try{
        await mongoose.connect(url);
        const user = User({name: "Rajneesh", email: "rajneesh@gmail.com", _id: 3})
        await user.save();
        const docs = await User.find({});
    }   catch (error) {
        console.error(error);
    }   finally {
        await mongoose.disconnect();
    }
}
run();