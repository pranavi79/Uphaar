const app =require("./app");
const dotenv =require("dotenv");
const connectDB =require("./config/database");

dotenv.config({path:"Backend/config/config.env"});
const hostname = process.env.SERVER_HOSTNAME;
const port = process.env.SERVER_PORT || 3000;

//Connect Database
connectDB();

// Start the server
const server = app.listen(port, hostname, () => {
    console.log(`Server started on port ${port}.`);
});