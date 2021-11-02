//const dotenv =require("dotenv");
const mongoose =require("mongoose");

const connectDB=()=>{
//Database Connection
mongoose.connect(process.env.DATABASE_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to database!');
}).catch((err)=>{
    console.log(err);
});
};

module.exports=connectDB;